const Mars = require("./Mars");

describe("Mars", () => {
	let mars;

	beforeEach(() => {
		mars = new Mars(5, 3);
	});

	test("should have correct initial values", () => {
		expect(mars.maxX).toBe(5);
		expect(mars.maxY).toBe(3);
		expect(mars.lostRobots).toEqual(new Set());
	});

	test("should correctly check if a position is scented", () => {
		mars.markScent({ x: 2, y: 1 });
		expect(mars.isScented({ x: 2, y: 1 })).toBe(true);
		expect(mars.isScented({ x: 1, y: 1 })).toBe(false);
	});

	test("should correctly mark a position as scented", () => {
		mars.markScent({ x: 3, y: 0 });
		expect(mars.lostRobots).toEqual(new Set(["3,0"]));
	});

	test("should correctly validate a position", () => {
		expect(mars.isValidPosition({ x: 2, y: 1 })).toBe(true);
		expect(mars.isValidPosition({ x: 0, y: 0 })).toBe(true);
		expect(mars.isValidPosition({ x: 5, y: 3 })).toBe(true);
		expect(mars.isValidPosition({ x: 6, y: 3 })).toBe(false);
		expect(mars.isValidPosition({ x: 2, y: -1 })).toBe(false);
	});
});
