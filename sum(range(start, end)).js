function range( begin, end ) {
	var rangeList = [];
	do {
		rangeList.push(begin++)
	} while (begin <= end);
	return rangeList;
}

function sum( rangeList ) {
	var i, sum = 0;
	for (i = 0; i < rangeList.length; ++i) {
		sum += rangeList[i];
	}
	return sum;
}

/* try */ console.log(sum(range(1, 10)))