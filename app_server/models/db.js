const mongoose = require('mongoose');
require('./locations');

let dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
  // 线上数据库
  dbURI = '';
}
mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error :`, err);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose disconnected`);
});

const gracefulShutDown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

process.once('SIGUSR2', () => {
  gracefulShutDown('nodemon restart', () => {
    process.kill(process.pid, `SIGUSR2`);
  });
});

process.on(`SIGINT`, () => {
  gracefulShutDown('app termination', () => {
    process.exit(0);
  });
});
