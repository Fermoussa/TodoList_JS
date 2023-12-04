let body = document.body;

let btnAjouter = document.getElementById("boutonAjouter");




btnAjouter.addEventListener("click",function(){
    let firstInput = document.getElementById("premierInput");
    let valFirstInput = firstInput.value;
    // console.log(valFirstInput);

    let div = document.createElement("div");
    let txt = document.createTextNode(valFirstInput);
    div.appendChild(txt);

    div.style.backgroundColor = "rgb(240,128,128)";
    div.style.border = "2px solid red";
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
    contentBoutons.style.backgroundColor = "orange";
    contentBoutons.style.flexDirection = "column";
    div.appendChild(contentBoutons);

    let boutonFini = document.createElement("button");
    let txtBoutonFini = document.createTextNode("Fini");
    boutonFini.appendChild(txtBoutonFini);
    contentBoutons.appendChild(boutonFini);

    boutonFini.addEventListener("click",function(){
        div.style.backgroundColor = "lightgreen";
        div.style.border = "2px solid green";
    })

    // ! -------------------------------------------------

    let boutonModif = document.createElement("button");
    let txtBoutonModif = document.createTextNode("Modifier");
    boutonModif.appendChild(txtBoutonModif);
    contentBoutons.appendChild(boutonModif);

    boutonModif.addEventListener("click",function(){
        let nvlValeur = document.createElement("input");
        contentBoutons.insertBefore(nvlValeur, boutonModif);

        let validModif = document.createElement("button");
        let txtValid = document.createTextNode("Ok");
        validModif.appendChild(txtValid);
        boutonModif.replaceWith(validModif);
        contentBoutons.insertBefore(validModif, boutonSupp);

        // validModif.addEventListener("click",function(){
        //     // valFirstInput = nvlValeur.value;
        //     console.log(`ANCIENNE VALEUR: ${div.innerText}`);

        //     console.log(`NOUVELLE VALEUR: ${nvlValeur.value}`);
            
        //     let test = document.createTextNode(nvlValeur.value);
        //     txt.replaceWith(test);

        //     validModif.replaceWith(boutonModif);
        //     nvlValeur.remove();
        // })

    })

    validModif.addEventListener("click",function(){
        // valFirstInput = nvlValeur.value;
        console.log(`ANCIENNE VALEUR: ${div.innerText}`);

        console.log(`NOUVELLE VALEUR: ${nvlValeur.value}`);
        
        let test = document.createTextNode(nvlValeur.value);
        txt.replaceWith(test);

        validModif.replaceWith(boutonModif);
        nvlValeur.remove();
    })

     // ! -------------------------------------------------

    let boutonSupp = document.createElement("button");
    let txtBoutonSupp = document.createTextNode("Supprimer");
    boutonSupp.appendChild(txtBoutonSupp);
    contentBoutons.appendChild(boutonSupp);


})