var currentdate = new Date(); 
var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    document.getElementById("Time").innerHTML = datetime;

/**
 * 1. var set
 * 2. give the text a name
 * 3. remove any formatting
 * 4. copy to clipboard
*/    
function ClipBoard()
{
    holdtext.innerText = copytext.innerText;
    Copied = holdtext.createTextRange();
    Copied.execCommand("RemoveFormat");
    Copied.execCommand("Copy");
}
