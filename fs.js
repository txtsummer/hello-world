var fs = require('fs');
console.log("ddfg")
//同步
var filename = process.argv[2];
	file = fs.readFileSync(filename);
	contents = file.toString();
var lines = contents.toString().split('\n').length - 1;
 	console.log(lines);