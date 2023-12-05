let body = document.body;

let btnAjouter = document.getElementById("boutonAjouter");




btnAjouter.addEventListener("click", function () {

    let firstInput = document.getElementById("premierInput");
    let valFirstInput = firstInput.value;

    let div = document.createElement("div");
    let paragraphe = document.createElement("p");
    let txtParagraphe = document.createTextNode(valFirstInput);
    paragraphe.appendChild(txtParagraphe);
    div.appendChild(paragraphe);

    div.style.backgroundColor = "rgb(240,128,128)";
    div.style.border = "2px solid red";
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
    contentBoutons.style.backgroundColor = "rgb(39,83,165)";
    contentBoutons.style.flexDirection = "column";
    div.appendChild(contentBoutons);

    let boutonFini = document.createElement("button");
    let txtBoutonFini = document.createTextNode("Finir");
    boutonFini.appendChild(txtBoutonFini);
    contentBoutons.appendChild(boutonFini);

    boutonFini.addEventListener("click", function () {
        div.style.backgroundColor = "lightgreen";
        div.style.border = "2px solid green";
        boutonFini.innerHTML = "Fini";

        boutonFini.addEventListener("dblclick", function () {
            div.style.backgroundColor = "rgb(240,128,128)";
            div.style.border = "2px solid red";
            boutonFini.innerHTML = "Finir";
        })
    })

    // ! -------------------------------------------------

    let boutonModif = document.createElement("button");
    let txtBoutonModif = document.createTextNode("Modifier");
    boutonModif.appendChild(txtBoutonModif);
    contentBoutons.appendChild(boutonModif);

    boutonModif.addEventListener("click", function () {
        let nvlValeur = document.createElement("input");
        contentBoutons.insertBefore(nvlValeur, boutonModif);

        let validModif = document.createElement("button");
        let txtValid = document.createTextNode("Ok");
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
    let txtBoutonSupp = document.createTextNode("Supprimer");
    boutonSupp.appendChild(txtBoutonSupp);
    contentBoutons.appendChild(boutonSupp);

    boutonSupp.addEventListener("click", function () {

        let confirmSupp = document.createElement("button");
        let txtConfirmSupp = document.createTextNode("Confirmez supression");
        confirmSupp.appendChild(txtConfirmSupp);
        contentBoutons.appendChild(confirmSupp);
        boutonSupp.replaceWith(confirmSupp);

        confirmSupp.addEventListener("click", function () {
            div.remove();
        })
        // * -----------------------------------------
        let annulerSupp = document.createElement("button");
        let txtAnnuleSupp = document.createTextNode("Annuler supression");
        annulerSupp.appendChild(txtAnnuleSupp);
        contentBoutons.appendChild(annulerSupp);

        annulerSupp.addEventListener("click", function () {
            confirmSupp.replaceWith(boutonSupp);
            annulerSupp.remove();
        })
    })

    // ! -------------------------------------------------------

    let btnVoirTout = document.getElementById("boutonTous");
    btnVoirTout.addEventListener("click", function () {
        div.style.display = "flex";
    })

    let btnVoirEnCours = document.getElementById("boutonEnCours");
    btnVoirEnCours.addEventListener("click",function(){
        if(div.style.border == "2px solid red"){
            div.style.display = "flex";
        }
        else{
            div.style.display = "none";
        }
    })

    let btnVoirFini = document.getElementById("boutonFini");
    btnVoirFini.addEventListener("click",function(){
        if(div.style.border != "2px solid red"){
            div.style.display = "flex";
        }
        else{
            div.style.display = "none";
        }
    })

    


})

