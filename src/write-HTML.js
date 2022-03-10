const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'HTML file successfully created'
        });
        
        console.log(`HTML file created in "dist" folder`);
      });
    });
};

module.exports = writeFile;