//Funzione di stampa in console
function stampaConsole(arrayOggetti) {
    arrayOggetti.forEach(teamMember => {
        console.log(teamMember.nome, teamMember.ruolo, teamMember.immagine);
    });
};