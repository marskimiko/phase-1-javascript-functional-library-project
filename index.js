const myEach = function(collection, callback) {
  for (const value of collection) {
    // console.log('value',value)
    // console.log('collection', collection)
    return collection;
  }
  callback()
}