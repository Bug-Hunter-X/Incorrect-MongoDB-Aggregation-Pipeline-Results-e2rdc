```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection('data').aggregate([
  {$match: { /*some criteria*/ } },
  {$group: { _id: '$field', count: {$sum: 1} } },
  {$sort: {count: -1}},
  {$limit: 10}
])
```