// Hello World => olleH dlroW

function reverseText(str){
    str = str+ " ";
    let output = "";
    let stri = "";
    for(let i=0 ; i<str.length; i++){
        if(str[i]!==" "){
            stri =  str[i] + stri;
        }
        else{
            output  = output + " " +stri;
            stri = ""
        }
    }
    return output;
}
console.log(reverseText("Hello World"))