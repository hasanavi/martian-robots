const Robot = require("./Robot");
const Mars = require("../mars/Mars");

describe("Robot", () => {
	let mars, robot;

	beforeEach(() => {
		mars = new Mars(5, 3);
		robot = new Robot(mars, 1, 1, "E");
	});

	test("can turn left", () => {
		robot.turnLeft();
		expect(robot.orientation).toBe("N");
	});

	test("can turn right", () => {
		robot.turnRight();
		expect(robot.orientation).toBe("S");
	});
});
