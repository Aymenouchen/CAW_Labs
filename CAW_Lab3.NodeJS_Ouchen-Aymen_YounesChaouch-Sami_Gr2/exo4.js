const fs = require('fs');
const fileName = process.argv[2];
const textToAdd = process.argv[3];

if (!textToAdd) {
  console.log('Veuillez spécifier un texte en tant que premier argument.');
} else {
  fs.writeFile(fileName, textToAdd, (err) => {
    if (err) {
      console.error('Erreur lors de l\'enregistrement du fichier :', err);
    } else {
      console.log('Le fichier a été enregistré !');
    }
  });
}

if (!fileName || !textToAdd) {
    console.log('Veuillez spécifier un nom de fichier et un texte en tant que paramètres.');
  } else {
    fs.writeFile(fileName, textToAdd, (err) => {
      if (err) {
        console.error('Erreur lors de l\'enregistrement du fichier :', err);
      } else {
        console.log('Le fichier a été enregistré !');

        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
              console.error('Erreur de lecture du fichier :', err);
            } else {
              console.log('Contenu du fichier :');
              console.log(data);

        }
      }); 
      }
    });
  }

  /* 

   exécutez la commande : node exo4.js fx.txt "ceci est le texte ajouté dans le fichier créé"   
   pour créé un fichier fx.txt et ajouté un texte dans ce fichier et afficher le contenu de ce fichier 

    */
