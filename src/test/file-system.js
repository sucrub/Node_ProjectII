const { log } = require('console');
var fs = require('fs');
// var http = require('http');
// http.createServer(function (req, res) {
//     // Read file
//     fs.readFile("demo.html", function (err, data) {
//         res.writeHead(200, { 'Content-type': 'text/html' });
//         res.write(data);
//         res.end();
//     })
// }).listen(8000);

// Create file: appendFile(), open(), writeFile()
// fs.appendFile("mytextfile.txt", 'Content', function (err) {
//     if (err) throw err;
//     console.log('Saved');
// });

// fs.open("mytextfile2.txt", 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved');
// });

// Update file:
// fs.writeFile("mytextfile.txt", 'New content', function (err) {
//     if (err) throw err;
//     console.log('Updated');
// })
// Update thêm nội dung
// fs.appendFile("mytextfile.txt", "\nNew content 2", function (err) {
//     if (err) throw err;
//     console.log('Updated');
// })

// Delete file
fs.unlink("testdelete.txt", function (err) {
    if (err) throw err;
    console.log("Deleted");
})

// Rename file
fs.rename('oldname.txt', 'newname.txt', function (err) {
    if (err) throw err;
    console.log("Renamed");
})

