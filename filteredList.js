var filteredList = watchList
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  .filter(movie => {
    // return true it will keep the item
    // return false it will reject the item
    return parseFloat(movie.rating) >= 8.0;
  });

  
//   The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys. 
//   The new array should only include objects where imdbRating is greater than or equal to 8.0. 
//   Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.

