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

	move() {
		let newPos = { ...this.pos };
		switch (this.orientation) {
			case "N":
				newPos.y += 1;
				break;
			case "E":
				newPos.x += 1;
				break;
			case "S":
				newPos.y -= 1;
				break;
			case "W":
				newPos.x -= 1;
				break;
		}
		if (this.mars.isScented(this.pos)) {
			// If the robot is about to fall off the grid but there is a scent, ignore the move
			if (!this.mars.isValidPosition(newPos)) {
				return;
			}
			// If the robot is on a scented position and moves off the grid, do nothing
		} else if (!this.mars.isValidPosition(newPos)) {
			// If the robot is about to fall off the grid and there is no scent, mark the position as scented
			this.mars.markScent(this.pos);
			this.lost = true;
			return;
		}
		this.pos = newPos;
	}

	executeInstruction(instruction) {
		switch (instruction) {
			case "L":
				this.turnLeft();
				break;
			case "R":
				this.turnRight();
				break;
			case "F":
				this.move();
				break;
			default:
				throw new Error(`Invalid instruction: ${instruction}`);
		}
	}

	executeInstructions(instructions) {
		for (let instruction of instructions) {
			this.executeInstruction(instruction);
		}
		return {
			x: this.pos.x,
			y: this.pos.y,
			orientation: this.orientation,
			lost: this.lost,
		};
	}
}

module.exports = Robot;
