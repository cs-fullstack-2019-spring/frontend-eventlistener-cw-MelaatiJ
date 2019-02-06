
// creatin gmy function for when thee button is clicked and asking the user the same question in a while loop
function whenbuttonisclicked()
{
    while (userinput !== "quit")
    {
        userinput = prompt("Enter 'quit' if you want to quit");
    }

}



var userinput="";
//settung my userinout variable to an empty string
var clickmeButton = document.querySelector("#clickmebutton");
//calling my clickme button using the query selecter and its id
clickmeButton.onclick = whenbuttonisclicked;
//using an event listener
