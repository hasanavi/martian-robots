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

	test("can move forward", () => {
		robot.move();
		expect(robot.pos).toEqual({ x: 2, y: 1 });
	});

	test("marks scented position when lost", () => {
		robot.executeInstructions("FFFFF");
		expect(mars.isScented(robot.pos)).toBe(true);
		expect(robot.lost).toBe(true);
	});

	test("does not move when about to fall off and there is no scent", () => {
		robot.pos = { x: 5, y: 3 };
		robot.orientation = "E";
		robot.move();
		expect(robot.pos).toEqual({ x: 5, y: 3 });
	});

	test("throws error on invalid instruction", () => {
		expect(() => robot.executeInstruction("A")).toThrow(
			"Invalid instruction: A"
		);
	});
});
