db.locations.save({
  "name": "Starcups",
  "address": "125 High Street, Reading, RG6 1PS",
  "rating": 3,
  "facilities": ["Hot drinks", "Food", "Premium wifi"],
  "coords": [
      23.13747,
      113.325046
  ],
  "openingTimes": [{
      "days": "Monday - Friday",
      "opening": "7:00am",
      "closing": "7:00pm",
      "closed": false
  }, {
      "days": "Saturday",
      "opening": "8:00am",
      "closing": "5:00pm",
      "closed": false
  }, {
      "days": "Sunday",
      "closed": true
  }]
});

db.locations.update(
  {
    name: 'Starcups'
  },
  {
    $push: {
      reviews: {
        _id: ObjectId(),
        author: 'Charlie Chaplin',
        rating: 3,
        timestamp: '16 June 2013',
        reviewText: "It was okay. Coffee wasn't great, but the wifi was fast."
      }
    }
  }
);
