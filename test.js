
db.locations.update(
  {
    name: 'Starcups'
  },
  {
    $push: {
      reviews: {
        _id: ObjectId(),
        author: 'Simon Holmes',
        rating: 5,
        timestamp: '16 July 2013',
        reviewText:
          "What a great place. I can't say enough good things about it."
      }
    }
  }
)
