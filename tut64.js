// Node JS module example 
const fs = require('fs');
let text = fs.readFileSync("bandar.txt", "utf-8");
text = text.replace("bandar", "kitanu");
console.log(text);

fs.writeFileSync("khabees.txt", text);
console.log("File created successfully!...");