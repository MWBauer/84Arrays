var n1=new Array(5); //allocate five-element array
var n2= new Array(); //allocate empty array

//assign values to each element of Array n1
for (var i = 0; i < n1.length; ++i)
  n1[i]=i;

//create and initialize five elements in Array n2
for (var i = 0; i < 5; ++i)
  n2[i]=i;

outputArray("Array n1;", n1);
outputArray("Array n2;", n2);

//output the heading followed by a two-column table containing subscript and elements of "theArray"
function outputArray(heading, theArray) {
  document.writeln("<h2>" + heading + "</h2>");
  document.writeln("<table border = \"1\"");
  document.writeln("<thead><th>Subscript</th>" + "<th>Value</th></thead><tbody>");
  //output the subscript and value of each array element
  for (var i = 0; i <theArray.length; i++) 
    document.writeln("<tr><td>" + i + "</td><td>" + theArray[i] + "</td></tr>");
    document.writeln("</tbody></table>");
  }