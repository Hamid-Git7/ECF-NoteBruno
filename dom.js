const paragraphe = document.getElementById("paragraphe");
const buttonClick = document.getElementById("btnClick");
const inputs = document.querySelectorAll("input");
const myfocus = document.getElementById("Focus");
const parent = document.getElementById("Parent");
const button = document.querySelector('button');

button.addEventListener('click', () => {
    button.classList.toggle('party-time')
})

buttonClick.addEventListener("click", () => {
    if (buttonClick.innerHTML === "Choisir votre mode") {
        buttonClick.innerHTML = "Mode Couleur"
        inputs.forEach((champ) => {
            champ.removeAttribute("hidden");
            champ.setAttribute("style", "background: green");
        });
    } else if (buttonClick.innerHTML === "Mode Couleur") {
        buttonClick.innerHTML = "Mode Note"
        inputs.forEach((champ) => {
            champ.setAttribute("style", "background: white")
        });
    } else {
        buttonClick.innerHTML = "Mode Couleur"
        inputs.forEach((champ) => {
            champ.removeAttribute("hidden");
            champ.setAttribute("style", "background: green")
        })
    }
});

buttonClick.addEventListener("click", () => {
    if (buttonClick.innerHTML === "Mode Couleur" || buttonClick.innerHTML === "Mode Note") {
        myfocus.focus()
    };
});



inputs.forEach(myfocus => {
    myfocus.addEventListener("input", () => {
        // test si c'est la fin de la colonne
        if (myfocus.parentElement.parentElement.nextElementSibling == null) {
            myfocus.blur()
            //const nextInput = myfocus.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild;
            if (buttonClick.innerHTML == "Mode Couleur") {
                if (myfocus.value == 1) {
                    myfocus.value = ""
                    myfocus.setAttribute("style", "background: red")
                    //nextInput.focus();

                } else if (myfocus.value == 2) {
                    myfocus.value = ""
                    myfocus.setAttribute("style", "background: orange")
                    //nextInput.focus();

                } else if (myfocus.value == 3) {
                    myfocus.value = ""
                    myfocus.setAttribute("style", "background: yellow")
                    //nextInput.focus();

                } else if (myfocus.value == 4) {
                    myfocus.value = ""
                    myfocus.setAttribute("style", "background: green")
                    //nextInput.focus();

                }
                else { myfocus.value = "" }

            } else {
                
                    if (myfocus.value == 1) {
                        //nextInput.focus();
    
                    } else if (myfocus.value == 2) {
                        //nextInput.focus();
    
                    } else if (myfocus.value == 3) {
                        //nextInput.focus();
    
                    } else if (myfocus.value == 4) {
                        //nextInput.focus();
    
                    } else if (myfocus.value == 5) {
                        //nextInput.focus();
    
                    }
                    else { myfocus.value = "" }
                    
            
        }
            // ce n'est pas la fin de colonne
        } else {
            const nextInput = myfocus.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild;
            if (buttonClick.innerHTML == "Mode Couleur") {
                if (myfocus.value == 1) {
                    myfocus.value = ""
                    myfocus.setAttribute("style", "background: red")
                    nextInput.focus();

                } else if (myfocus.value == 2) {
                    myfocus.value = ""
                    myfocus.setAttribute("style", "background: orange")
                    nextInput.focus();

                } else if (myfocus.value == 3) {
                    myfocus.value = ""
                    myfocus.setAttribute("style", "background: yellow")
                    nextInput.focus();

                } else if (myfocus.value == 4) {
                    myfocus.value = ""
                    myfocus.setAttribute("style", "background: green")
                    nextInput.focus();

                }
                else { myfocus.value = "" }

            } else {
                if (myfocus.value == 1) {
                    nextInput.focus();

                } else if (myfocus.value == 2) {
                    nextInput.focus();

                } else if (myfocus.value == 3) {
                    nextInput.focus();

                } else if (myfocus.value == 4) {
                    nextInput.focus();

                } else if (myfocus.value == 5) {
                    nextInput.focus();

                }
                else { myfocus.value = "" }
            }
        }
    });
});

