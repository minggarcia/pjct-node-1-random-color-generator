import chalk from 'chalk';
import generateRandomColor from 'generate-random-color';
import randomColor from 'randomcolor';

// prints random # hex color string:

// const colorOfBox = generateRandomColor.hex();
// console.log(colorOfBox);

// prints string in color when input hex # is given:

// console.log(chalk.hex('#FF8800').bold('Orange!'));

// make a box:
/* console.log(`###############################
###############################
###############################
#####                     #####
#####       ${colorOfBox}       #####
#####                     #####
###############################
###############################
###############################`);*/

// combine everything:
const colorOfBox = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

console.log(
  chalk.hex(colorOfBox).bold(`###############################
###############################
###############################
#####                     #####
#####       ${colorOfBox}       #####
#####                     #####
###############################
###############################
###############################`),
);
