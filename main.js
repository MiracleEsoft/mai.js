


//dsfsdfsdf
/* var x = document.createElement("P");                        // Create a <p> element
var t = document.createTextNode("This is a paragraph.");    // Create a text node
x.appendChild(t);                                           // Append the text to <p>
document.body.appendChild(x);
function GetMostimpornatWords(str){
	var wordCounts = { };
	var ss="";
	var words = str.split(/\b/);
	for(var i = 0; i < words.length; i++){
		wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;
		}
return wordCounts;
	
}
console.log(GetMostimpornatWords('Arthur Samuel, an American pioneer in the field of computer gaming and artificial intelligence, coined the term Machine Learning in 1959 while at IBM. Evolved from the study of pattern recognition and computational learning theory in artificial intelligence, machine learning explores the study and construction of algorithms that can learn from and make predictions on data– such algorithms overcome following strictly static program instructions by making data-driven predictions or decisions.')); */



var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at port8081/');