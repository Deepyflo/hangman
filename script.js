let btnLetter = document.getElementById("btnLetter");
let letter = document.getElementById("inLetter");
let btnWord = document.getElementById("btnWord");
let word = document.getElementById("inWord");
let fault = 0;
let guess = "";

function readTextFile(file)
    {
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    let allText = rawFile.responseText;
                    let split = allText.split('\n');
                    let randomNum = Math.floor(Math.random() * split.length);
                    let randomLine = split[randomNum];
                    console.log("All Lines\n"+allText);
                    console.log("Line Number\n"+(randomNum+1));
                    console.log("Random Line\n"+randomLine);
                }
            }
        }
        rawFile.send(null);
        console.log(randomLine);
        if (randomLine) gen.textContent = randomLine;
        else gen.textContent = 'Not retrieved yet';
        //guess = randomLine;
    }
    readTextFile("./assets/liste_francais.txt");
    console.log(guess);
    