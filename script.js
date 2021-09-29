let btnLetter = document.getElementById("btnLetter");
let letter;
let btnWord = document.getElementById("btnWord");
let word;
let pageGuess = document.getElementById("guess");
let wrong = document.getElementById("fault");
let fault = 0;
let guess = "chien";
let arrGuess = [];
let displayGuess = "";
let win = "";

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
    hang = document.getElementById("hang");
    img = document.createElement("img");
    hang.appendChild(img);
    img.setAttribute("src", "./assets/img/vide.png");

    pageGuess.innerHTML = displayGuess;

    let check = false;
    let letPick = [];
    btnLetter.addEventListener("click", () => {
        letter = document.getElementById("inLetter");
        check = false;
        
        if (letter.value == null) {
            alert("please enter a letter");
        } else {
            pageGuess.innerHTML = "";
            for (let i = 0; i < arrGuess.length; i++) {
                if (arrGuess[i] == letter.vamue) {
                    displayGuess = setCharAt(displayGuess, i, letter.value);
                    check = true;
                }
            }
            letPick.forEach(element => {
                displayGuess += element + " ";
            });
            if (!check == true) {
                fault++;
                wrong.innerHTML += letter.value + " ";
                setHang(fault);
            }
        }
        console.log(fault);
        pageGuess.innerHTML = displayGuess;
        letter.value = "";
    })
    btnWord.addEventListener("click", () => {
        word = document.getElementById("inWord");
        if (guess == word.value) {
            win = true;
            displayGuess = guess;
        } else {
            fault++;
            wrong.innerHTML = word.value;
            setHang(fault);
        }
        word.value = "";
    })
    
})();
let setHang = (fault) => {
    if (fault == 1) {
        img.setAttribute("src", "./assets/img/tete.png");
    } else if (fault == 2) {
        img.setAttribute("src", "./assets/img/sansBras.png");
    } else if (fault == 3) {
        img.setAttribute("src", "./assets/img/oneBras.png");
    } else if (fault == 4) {
        img.setAttribute("src", "./assets/img/sansJambe.png");
    } else if (fault == 5) {
        img.setAttribute("src", "./assets/img/uneJambe.png");
    } else {
        img.setAttribute("src", "./assets/img/complet.png");
    }
}
let setCharAt = (str,index,chr) => {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

