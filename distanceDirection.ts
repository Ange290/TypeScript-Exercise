// Update the function signature so that all tests pass

type Direction = 'up'|'down'|'left'|'right';
function move(direction: Direction, distance: number) {
    return `Distance is ${direction}, Distance is ${distance}`;
}


console.log(move('up', 10));
// move('left', 5);

// move('up-right',10);

// move('down-left',20);

//move('up','20');