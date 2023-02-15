class Mars {
	constructor(maxX, maxY) {
		this.maxX = maxX;
		this.maxY = maxY;
		this.lostRobots = new Set();
	}

	isScented(pos) {
		return this.lostRobots.has(`${pos.x},${pos.y}`);
	}

	markScent(pos) {
		this.lostRobots.add(`${pos.x},${pos.y}`);
	}

	isValidPosition(pos) {
		return pos.x >= 0 && pos.x <= this.maxX && pos.y >= 0 && pos.y <= this.maxY;
	}
}

module.exports = Mars;
