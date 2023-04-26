## Energy Web - JavaScript/TypeScript Developer recruitment task

In this version, I filtered the movies based on the number of matching genres and then sort them by the number of genres and id. The complexity of this function is as follows:

1. The filter function iterating over the movies has a time complexity of O(m), where m is the number of movies.

2. The sort function at the end has a time complexity of O(m * log(m)) in the average and worst case, as it uses the built-in sorting algorithm of JavaScript.

Combining these complexities, I get a total time complexity of O(m) + O(m * log(m)). In this case, the dominant term is O(m * log(m)) as the complexity of sorting dominates the linear complexity of filtering.

So, the time complexity of this getFilteredMovies function is O(m * log(m)).