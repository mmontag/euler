(function(){
	var a = 2, b = 1, sum = 0;
	while(a < 4000000) {
		if (a%2 == 0)
			sum += a;
		var curr = a + b;
		b = a;
		a = curr;
	}
	console.log(sum);
}());