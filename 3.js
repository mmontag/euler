(function(){
	var p = 600851475143, d = 1, gpf = 1; // d = divisor, gpf = greatest prime factor
	var root = Math.ceil(Math.sqrt(p));
	while (++d <= root) { // beyond the sq. root is redundant
		if (p%d === 0) {
			console.log("%s is divisible by %s", p, d);
			p = p / d; // factorization: divide out the prime
			gpf = Math.max(d, gpf); // update the greatest prime factor
			d = 1; // reset divisor
		}
	}
	console.log(gpf)
}());