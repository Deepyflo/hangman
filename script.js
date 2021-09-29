let btnLetter = document.getElementById("btnLetter");
let letter;
let btnWord = document.getElementById("btnWord");
let word = document.getElementById("inWord").value;
let pageGuess = document.getElementById("guess");
let wrong = document.getElementById("fault");
let fault = 0;
let guess = "chien";
let arrGuess = [];
let displayGuess = "";

// function readTextFile(file)
//     {
//         let rawFile = new XMLHttpRequest();
//         rawFile.open("GET", file, false);
//         rawFile.onreadystatechange = function ()
//         {
//             if(rawFile.readyState === 4)
//             {
//                 if(rawFile.status === 200 || rawFile.status == 0)
//                 {
//                     let allText = rawFile.responseText;
//                     let sep = allText.split('\n');
//                     let randomNum = Math.floor(Math.random() * sep.length);
//                     let randomLine = sep[randomNum];
//                     // console.log("All Lines\n"+allText);
//                     console.log("Line Number\n"+(randomNum+1));
//                     console.log(/*"Random Line\n"+*/randomLine);
//                     return randomLine;
//                 }
//             }
//         }
//         rawFile.send(null);
//     }
// guess = readTextFile("./assets/liste_francais.txt");
// console.log(guess);
(() => {
    console.log(guess);
    arrGuess = guess.split('');
    console.log(arrGuess);
    arrGuess.forEach(element => {
        if (element == ' ') {
            displayGuess += "&nbsp;";
        } else if (element == '\'') {
            displayGuess += "\'";
        } else {
            displayGuess += "_";
        }
    });

    pageGuess.innerHTML = displayGuess;

    let check = false;
    let letPick = [];
    btnLetter.addEventListener("click", () => {
        letter = document.getElementById("inLetter").value;
        check = false;
        
        if (letter == null) {
            alert("please enter a letter");
        } else {
            pageGuess.innerHTML = "";
            for (let i = 0; i < arrGuess.length; i++) {
                if (arrGuess[i] == letter) {
                    displayGuess = setCharAt(displayGuess, i, letter);
                    // letPick[i] = arrGuess[i];
                    check = true;
                }
            }
            letPick.forEach(element => {
                displayGuess += element + " ";
            });
            if (!check == true) {
                fault++;
                wrong.innerHTML += letter + " ";
            }
        }
        console.log(fault);
        pageGuess.innerHTML = displayGuess;
    })
})();

let setCharAt = (str,index,chr) => {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

