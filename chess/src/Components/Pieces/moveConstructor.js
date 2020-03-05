export const getDiagonalMoves = (row, column, upperLimit=10) => {
    let possiblePos = [];
    const maxMovesUp = Math.min(7-Math.max(row, column),upperLimit);
    const maxMovesDown = Math.min(Math.min(row,column), upperLimit);
    for(let i=0;i<=maxMovesUp;i++){
        possiblePos.push({
            row: row+i,
            column: column+i
        });
    }
    for(let i=1;i<maxMovesDown;i++){
        possiblePos.push({
            row: row-i,
            column: column-i
        });
    }
    return possiblePos;
}

export const getHorizontalMoves = (row, column, upperLimit=10) => {
    let possiblePos = [];
    const maxMovesRight = Math.min(7-column, upperLimit);
    const maxMovesLeft = Math.min(column, upperLimit);
    for(let i=0;i<maxMovesRight;i++){
        possiblePos.push({
            row,
            column: column+i
        });
    }
    for(let i=1;i<maxMovesLeft;i++){
        possiblePos.push({
            row,
            column: column-i
        });
    }
    return possiblePos;
}

export const getVerticalMoves = (row, column, upperLimit=10) => {
    let possiblePos = [];
    const maxMovesUp = Math.min(7-row, upperLimit);
    const maxMovesDown = Math.min(row, upperLimit);
    for(let i=0;i<maxMovesUp;i++){
        possiblePos.push({
            row: row+i,
            column
        });
    }
    for(let i=1;i<maxMovesDown;i++){
        possiblePos.push({
            row: row-i,
            column
        });
    }
    return possiblePos;
}

export const isValidCell = (row, column) => {
    return (row<8&&column<8) && (row>=0&&column>=0);
}

export const getKnightMoves = (row, column) => {
    let possiblePos = [];
    possiblePos.push({
        row,
        column
    });
    if(isValidCell(row+2, column+1))
        possiblePos.push({
            row: row+2,
            column: column+1
        });
    if(isValidCell(row+2, column-1))
        possiblePos.push({
            row: row+2,
            column: column-1
        })
    if(isValidCell(row-2, column+1))
        possiblePos.push({
            row: row-2,
            column: column+1
        })
    if(isValidCell(row-2, column-1))
        possiblePos.push({
            row: row-2,
            column: column-1
        })
    return possiblePos;
}