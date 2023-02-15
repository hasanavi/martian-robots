const DIRECTIONS = ["N", "E", "S", "W"];

class Robot {
	constructor(mars, x, y, orientation) {
		this.mars = mars;
		this.pos = { x, y };
		this.orientation = orientation;
		this.lost = false;
	}

	turnLeft() {
		let index = DIRECTIONS.indexOf(this.orientation);
		this.orientation = DIRECTIONS[(index + 3) % 4];
	}

	turnRight() {
		let index = DIRECTIONS.indexOf(this.orientation);
		this.orientation = DIRECTIONS[(index + 1) % 4];
	}
}

module.exports = Robot;
