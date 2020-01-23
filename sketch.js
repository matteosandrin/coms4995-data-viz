var current_min;

function setup() {
	createCanvas(1150, 770); // make an HTML canvas element width x height pixels
	current_min = minute();
}

function draw() {

	if (minute() != current_min) {
		current_min = minute();
		console.log(current_min);
	}

	var s = second() + minute() * 60 + hour() * 60 * 60;
	noStroke();
	background('black');

	for (var k = 0; k < 24; k++) {
		for (var j = 0; j < 60; j++) {
			for (var i = 0; i < 60; i++) {
				var c = k * 60 * 60 + j * 60 + i;
				if (c > s) {
					fill('grey');
				} else if (c == s) {
					fill('red');
				} else {
					fill('white');
				}
				var x = 10 + (60 * 3 + 10) * (k % 6);
				var y = 10 + (60 * 3 + 10) * (Math.floor(k / 6));
				if (c == s) {
					square(x + i*3 - 1, y + j*3 - 1, 4);
				} else {
					square(x + i*3, y + j*3, 2);
				}
			}
		}
	}
}
