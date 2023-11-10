const fs = require('fs');
const filePath = process.argv[2]; 

if (!filePath) {
  console.log('Veuillez spécifier un fichier en tant que premier argument.');
} else {
  fs.readFile('f.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur de lecture du fichier:', err);
    } else {
      console.log(data);
    }
  });
}

/* 

exécutez la commande :  node ReadFile.js f.txt 
pour afficher le contenu de mon fichier (f.txt) 

   */
