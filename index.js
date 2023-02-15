const fs = require("fs");
// const readline = require("readline");
const Mars = require("./mars/Mars");
const Robot = require("./robot/Robot");

// const rl = readline.createInterface({
// 	input: fs.createReadStream("input.txt"),
// 	output: process.stdout,
// 	terminal: false,
// });

// let mars = null;
// let robots = [];

// rl.on("line", (line) => {
// 	if (!mars) {
// 		// Read the Mars dimensions from the first line
// 		const [maxX, maxY] = line.split(" ").map(Number);
// 		mars = new Mars(maxX, maxY);
// 	} else {
// 		// Read the robot position and instructions from the following lines
// 		const [x, y, orientation] = line.split(" ");
// 		const robot = new Robot(parseInt(x), parseInt(y), orientation);
// 		const instructions = rl.readline().trim();
// 		robots.push({ robot, instructions });
// 	}
// });

// rl.on("close", () => {
// 	// Execute the instructions for each robot and print the final positions
// 	robots.forEach(({ robot, instructions }) => {
// 		const { x, y, orientation, lost } = robot.executeInstructions(instructions);
// 		console.log(`${x} ${y} ${orientation}${lost ? " LOST" : ""}`);
// 	});
// });

const input = fs.readFileSync("./input.txt", "utf8").trim();
const lines = input.split(/\r?\n/);

const [xMax, yMax] = lines.shift().split(" ").map(Number);

const mars = new Mars(xMax, yMax);
const robots = [];

while (lines.length > 0) {
	const [x, y, orientation] = lines.shift().split(" ");
	const instructions = lines.shift();
	const robot = new Robot(mars, Number(x), Number(y), orientation);
	robots.push({ robot, instructions });
	lines.shift();
}

// Execute the instructions for each robot and print the final positions
robots.forEach(({ robot, instructions }) => {
	const { x, y, orientation, lost } = robot.executeInstructions(instructions);
	console.log(`${x} ${y} ${orientation}${lost ? " LOST" : ""}`);
});
