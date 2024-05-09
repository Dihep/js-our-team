/*//Funzione di stampa in console
function stampaConsole(arrayOggetti) {
    arrayOggetti.forEach(teamMember => {
        console.log(teamMember.nome, teamMember.ruolo, teamMember.immagine);
    });
};*/

//Funzione di stampa in pagina
function stampaInPagina(arrayOggetti) {

    //Obbiettivo di stampa
    const target = document.querySelector("main");

    //Stampa in ciclo
    arrayOggetti.forEach(teamMember => {
        //Contenitore output
        let outDiv = document.createElement("div");
        outDiv.classList.add("teamMember");
        //Stampa delle proprietà
        for (const key in teamMember) {
            let outSpan = document.createElement("span");
            outSpan.classList.add("attribute")
            outSpan.innerText = `${key}: ${teamMember[key]}`;
            outDiv.append(outSpan);
        }
        target.append(outDiv);
    });
};
