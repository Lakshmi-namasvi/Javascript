//2D array = multi-dimensional array that stores a matrix of data in rows and columns
// Useful for games, speradsheets, or represting images

const matrix=[[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix)

for (let row of matrix){
    const rowstring =row.join(' ');
    console.log(rowstring);
}