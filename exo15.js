const personne = {
    Nom: "AGOSSOU BODE",
    Prenom: "Paujula",
    Age: 21,
    Profession: "Dev",
    Pays: "Bénin"

  };
  

  for (const property in personne) {
    console.log(property + ": " + personne[property]);
  }
  