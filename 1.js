(function(){
	var x = 0, sum = 0;
	while (x < 1000) {
		if (x%3 === 0 || x%5 ===0)
			sum += x;
		x++;
	}
	console.log(sum);
}())