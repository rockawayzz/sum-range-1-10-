function range(start, end) {
  var array = [];
  do {
    array.push(start++);
  } while (start <= end);
  return array;
 }
 
 
 function sum(array) {
  var i, sum = 0;
  for (i = 0; i < arraylength; ++i) {
      sum += array[i];
  }
  return sum;
}
