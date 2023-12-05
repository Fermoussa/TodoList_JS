let body = document.body;

let btnAjouter = document.getElementById("boutonAjouter");



// btnAjouter.addEventListener("click", todoList())

let firstInput = document.getElementById("premierInput");

function todoList() {
    let valFirstInput = firstInput.value;

    // firstInput.addEventListener("keydown",(element)=>{
    //     if(element.key === 'Enter'){

    //     }
    // })

    let div = document.createElement("div");
    let paragraphe = document.createElement("p");
    let txtParagraphe = document.createTextNode(valFirstInput);
    paragraphe.appendChild(txtParagraphe);
    div.appendChild(paragraphe);

    div.style.backgroundColor = "rgb(240,128,128)";
    div.style.border = "2px solid red";
    div.style.borderRadius = "5px";
    div.style.color = "white";
    div.style.padding = "5px";
    div.style.width = "550px";
    div.style.height = "150px";
    div.style.marginLeft = "400px";
    div.style.marginTop = "30px";
    div.style.textAlign = "left";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.fontSize = "30px";
    div.style.justifyContent = "space-between";
    div.style.flexDirection = "row"
    body.appendChild(div);

    let contentBoutons = document.createElement("div");
    contentBoutons.style.display = "flex";
    // contentBoutons.style.backgroundColor = "black";
    contentBoutons.style.flexDirection = "column";
    div.appendChild(contentBoutons);

    let boutonFini = document.createElement("button");
    let txtBoutonFini = document.createTextNode("Finir");
    boutonFini.appendChild(txtBoutonFini);
    contentBoutons.appendChild(boutonFini);
    boutonFini.style.color = "white";
    boutonFini.style.backgroundColor = "#b81515";
    boutonFini.style.padding = "2%";
    boutonFini.style.border = "1px solid white";
    boutonFini.style.borderRadius = "5px";
    boutonFini.style.marginBottom = "3px";


    boutonFini.addEventListener("click", function () {
        div.style.backgroundColor = "lightgreen";
        div.style.border = "2px solid green";
        boutonFini.innerHTML = "Fini";
        boutonFini.style.backgroundColor = "darkgreen";
        boutonFini.style.padding = "2%";
        boutonFini.style.border = "1px solid white";
        boutonFini.style.borderRadius = "5px";


        boutonFini.addEventListener("dblclick", function () {
            div.style.backgroundColor = "rgb(240,128,128)";
            div.style.border = "2px solid red";
            boutonFini.innerHTML = "Finir";
            boutonFini.style.backgroundColor = "#b81515";


        })
    })

    // ! -------------------------------------------------

    let boutonModif = document.createElement("button");
    let txtBoutonModif = document.createTextNode("Modifier");
    boutonModif.appendChild(txtBoutonModif);
    contentBoutons.appendChild(boutonModif);
    boutonModif.style.backgroundColor = "#b81515";
    boutonModif.style.color = "white";
    boutonModif.style.border = "1px solid white";
    boutonModif.style.padding = "2%";
    boutonModif.style.borderRadius = "5px";
    boutonModif.style.width = "85px";
    boutonModif.style.marginBottom = "3px";


    boutonModif.addEventListener("click", function () {
        let nvlValeur = document.createElement("input");
        contentBoutons.insertBefore(nvlValeur, boutonModif);

        let validModif = document.createElement("button");
        let txtValid = document.createTextNode("Ok");
        validModif.style.background = "#b81515";
        validModif.style.border = "1px solid white";
        validModif.style.color = "white";
        validModif.style.borderRadius = "50%";
        validModif.style.width = "30px";
        validModif.style.textAlign = "center";
        validModif.style.marginLeft = "43%";

        validModif.appendChild(txtValid);
        boutonModif.replaceWith(validModif);
        contentBoutons.insertBefore(validModif, boutonSupp);

        validModif.addEventListener("click", function () {
            // valFirstInput = nvlValeur.value;

            paragraphe.innerHTML = nvlValeur.value;
            console.log(`ANCIENNE VALEUR: ${paragraphe.innerHTML}`);

            console.log(`NOUVELLE VALEUR: ${paragraphe.innerHTML}`);

            // let test = document.createTextNode(nvlValeur.value);
            // txt.replaceWith(test);

            validModif.replaceWith(boutonModif);
            nvlValeur.remove();
        })

    })



    // ! -------------------------------------------------

    let boutonSupp = document.createElement("button");
    let txtBoutonSupp = document.createTextNode("Delete");
    boutonSupp.appendChild(txtBoutonSupp);
    contentBoutons.appendChild(boutonSupp);
    boutonSupp.style.backgroundColor = "transparent";
    boutonSupp.style.color = "white";
    boutonSupp.style.border = "1px solid white";
    boutonSupp.style.backgroundColor = "#b81515";
    boutonSupp.style.padding = "3%";
    boutonSupp.style.borderRadius = "5px";

    boutonSupp.addEventListener("click", function () {

        let confirmSupp = document.createElement("button");
        let txtConfirmSupp = document.createTextNode("Confirmez supression");
        confirmSupp.appendChild(txtConfirmSupp);
        contentBoutons.appendChild(confirmSupp);
        boutonSupp.replaceWith(confirmSupp);
        confirmSupp.style.backgroundColor = "darkgreen";
        confirmSupp.style.color = "white";
        confirmSupp.style.border = "1px solid black";


        confirmSupp.addEventListener("click", function () {
            div.remove();
        })
        // * -----------------------------------------
        let annulerSupp = document.createElement("button");
        let txtAnnuleSupp = document.createTextNode("Annuler supression");
        annulerSupp.appendChild(txtAnnuleSupp);
        contentBoutons.appendChild(annulerSupp);
        annulerSupp.style.backgroundColor = "#b81515";
        annulerSupp.style.border = "1px solid black";
        annulerSupp.style.color = "white";

        annulerSupp.addEventListener("click", function () {
            confirmSupp.replaceWith(boutonSupp);
            annulerSupp.remove();
        })
    })

    // ! -------------------------------------------------------

    let btnVoirTout = document.getElementById("boutonTous");
    btnVoirTout.addEventListener("click", function () {
        div.style.display = "flex";
        // btnVoirTout.style.backgroundColor = "red";
    })

    let btnVoirEnCours = document.getElementById("boutonEnCours");
    btnVoirEnCours.addEventListener("click", function () {
        if (div.style.border == "2px solid red") {
            div.style.display = "flex";
        }
        else {
            div.style.display = "none";
        }
        // btnVoirEnCours.style.backgroundColor = "red";

    })

    let btnVoirFini = document.getElementById("boutonFini");
    btnVoirFini.addEventListener("click", function () {
        if (div.style.border != "2px solid red") {
            div.style.display = "flex";
        }
        else {
            div.style.display = "none";
        }
    })

}

btnAjouter.addEventListener("click", todoList);

firstInput.addEventListener("keydown", (element) => {
    if (element.key === 'Enter') {
        todoList();
    }
})



// ! FINI