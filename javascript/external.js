//document.write("Where is my JS code?");
//window.alert(5+6);
//window.alert('5+6');
//document.write('<h1>A heading</h1>');
//document.write('<p>A sentence.</p>');
//const x="web";
//const y=" mapping";
//const out= x+y;
//document.write(out);
//A prompt box is used to prompt users to input a value before entering a page.
//user_name= window.prompt("Please enter your name", "Type your name here");
//document.write(user_name);
//x = 22;
//const y = 33;
//document.writeln(x + y);
//document.writeln("<br>");
//document.writeln(x += 33);
//document.writeln("<button onclick='condition()'>Conditional Test</button>")

//function condition()
//{
  //x=confirm("Are you sure you want to proceed?");
  //if(x)
  //{
    //document.writeln("You chose Okay!");
  //}
  //else
    //{
      //document.writeln("You chose Cancel!");
  //  }
//}

//user_name=window.prompt("Please enter your name", "Type your name here");
//document.writeln(user_name);
//create a new variable to save the value of the user's user_name
var webmaps =
[
  [ "OpenTopography Tools",
    "https://www.opentopography.org/tools",
    "Open Topography is a collection of data and tools that can be downloaded and used by the public. Some of the tools available is DEM Generation and Global Solar Irradiation. The data provided is high-resolution topography from all over the globe."
  ],
    ["Texas Ecosytems Analytical Mapper",
    "https://tpwd.texas.gov/gos/team/",
    "The Analytical Mapper is an interactive tool that guves the user a better understanding of Texas habitats. Some data that is provided is siol,hydrology, and ecoregion layers. There are more than 14,000 data samples collected open to the public. "
  ]
];


function welcome()
{
let a = "Please enter your name.";
let b = "Type your name here.";

//A prompt is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);

message = "<h1>Hello, welcome to my webpage, " +  user_name + "!</h1>"
return message
}

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
  {
    document.write("<td>" + webmaps[row][column] + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
}
