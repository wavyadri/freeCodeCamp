function getRating(watchList){
    // Only change code below this line
    var averageRating =
    watchList
      // Use filter to find films directed by Christopher Nolan
      .filter(film => film.Director === "Christopher Nolan")
      // Use map to convert their ratings from strings to numbers
      .map(film => Number(film.imdbRating))
      // Use reduce to add together their ratings
      .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
    // Divide by the number of Nolan films to get the average rating
    watchList.filter(film => film.Director === "Christopher Nolan").length;
    // Only change code above this line
    return averageRating;
  }

  // The variable watchList holds an array of objects with information on several movies. 
  // Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. 
  // Recall from prior challenges how to filter data and map over it to pull what you need. 
  // You may need to create other variables, and return the average rating from getRating function. 
  // Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

