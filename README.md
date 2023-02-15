# martian-robots

## For this solution Node.js v18.13.0 was used

## Installation

After cloning this repo install a dependency package Jest for testing using command line

`yarn install` or simply `yarn`

## Run the application

I've used input.txt file to enter Mars and Robots information. The first line of the file is used to create the Mars object, and the subsequent lines are used to create the Robot objects and their associated instructions. Once all the data has been read from the file, we loop through the robots and execute their instructions, printing the final positions as we go.

The assumption for this solution is the input file is well-formatted according to the original problem. Feel free to modify the input.txt file to handle different scenarios.

To run the application try this command

`yarn start`

## Testing

Jest testing library was used to test the Mars and Robot Class - which has the most imprortant logic. I developed this solution using Test Driven approach. Write tests first - make it fail and write the solution to pass that tests.

To run tests try this command

`yarn test`

To run tests in watch mode try this command

`yarn test:watch`

## N.B. - please note I've left some commented code in `index.js` file in order to show my thinking procedure as requested. I tried to read the input.txt using `readline` module but I faced some challenges. Later I've used `fs.readFileSync` to get around the issue.

If you have any question feel free to reach me at hasanavi@gmail.com

Thank you.
