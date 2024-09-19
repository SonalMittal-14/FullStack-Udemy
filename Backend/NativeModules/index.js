const fs = require("fs");

// fs.writeFile("message.txt","Hello from Node!",(err) => {
//     if (err) throw err;
//     console.log("The file has been saved");
// });

// fs.readFile("./message.txt","utf8",(err,data) =>{
//     if (err) throw err;
//     console.log("Error h bhai...Code sahi kar le");
    
// })

fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error h bhai...Code sahi kar le", err.message);
        return;  // Exit the function if there's an error
    }
    console.log("File content:", data);  // Display the file content
});
