//* https://www.codingame.com/ide/puzzle/power-of-thor-episode-1

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs: string[] = readline().split(' ');
const lightX: number = parseInt(inputs[0]); // the X position of the light of power
const lightY: number = parseInt(inputs[1]); // the Y position of the light of power
const initialTx: number = parseInt(inputs[2]); // Thor's starting X position
const initialTy: number = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    const remainingTurns: number = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log('SE');
}
