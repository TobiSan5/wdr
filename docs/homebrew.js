function keyify(text_s	tr){
	text_str = String(text_str).toLowerCase()
	text_str = text_str.replace(/([ .*+?^=!:${}()|\[\]\/\\])/g, "_");
	return text_str;  
};  

// giga = e9, nano = e-9
var unitArray = {
	'm': {
		'm2spa_kg': 1.95e-10,
		'm2sgpa_kg': 0.195,
		'm2hpa_g': 7.0e4,
		'm2hmmhg_g': 93.6e3,
		's_m': 2.59e-5
		},
	'm2spa_kg': {
		'm': 5.12e9,
		'm2sgpa_kg': 1.0e9,
		'm2hpa_g': 3.6e6,
		'm2hmmhg_g': 0.48e9,
		's_m': 0.133e6
		},
	'kg__m2spa_': {
		'm_s': 7.5e-6,
		'g__m2hpa_': 2.78e-7,
		'g__m2hmmhg_': 2.08e-9,
		'us_perm': 57.2135e-12
		},
	'kg__mspa_': {
		'kg__msgpa_': 1.0e-9,
		'g__mhpa_': 0.278e-6,
		'g__mhmmhg_': 2.083e-9,
		'm2_s': 7.5e-6
		},
	'metric_perm': {
		'kg__m2spa_': 1.151905427656e10,
		'us_perm':  6.59045e-1
	}
	};


