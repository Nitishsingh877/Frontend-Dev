let marks = [92,23,45,68,980];
const highestMarks = marks.length > 0 ? Math.max(...marks) : null;
if(highestMarks!==null) {
    console.log('the highest marks is ',highestMarks);
}
else {
    console.log("Enter the Maarkss plz");
}

return highestMarks;