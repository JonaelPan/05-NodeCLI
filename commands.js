const fs = require("fs");
const request = require("request");
module.exports = {
  pwd: function () {
    process.stdout.write(process.argv.toString() + "\n");
    process.stdout.write("prompt >");
  },
  date: function () {
    let date = Date();
    let valor = date.toString();
    process.stdout.write(valor + "\n");
    process.stdout.write("prompt >");
  },
  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      //process.stdout.write("prompt > ");
    });
    setTimeout(function () {
      //const endTime = new Date();
      process.stdout.write("prompt >");
    }, 500);
  },
  echo: function (texto) {
    process.stdout.write(texto + "\n");
    process.stdout.write("prompt >");
  },
  cat: function (archivos) {
    arreglo = archivos.split(" ");
    arreglo.forEach((element) => {
      fs.readFile("./" + element, (err, datos) => {
        if (err) {
          process.stdout.write(err + "\n");
        } else {
          process.stdout.write(datos.toString() + "\n");
        }
      });
    });
    setTimeout(function () {
      //const endTime = new Date();
      process.stdout.write("prompt >");
    }, 500);
    //process.stdout.write("prompt >");
  },
  head: function (archivos) {
    arreglo = archivos.split(" ");
    arreglo.forEach((element) => {
      fs.readFile("./" + element, (err, datos) => {
        if (err) {
          process.stdout.write(err + "\n");
        } else {
          let arreglo = datos.toString().split("\n");
          for (i = 0; i < 5; i++) {
            process.stdout.write("" + arreglo[i] + "\n");
          }
        }
      });
    });
    setTimeout(function () {
      //const endTime = new Date();
      process.stdout.write("prompt >");
    }, 500);
    //process.stdout.write("prompt >");
  },
  tail: function (archivos) {
    arreglo = archivos.split(" ");
    arreglo.forEach((element) => {
      fs.readFile("./" + element, (err, datos) => {
        if (err) {
          process.stdout.write(err + "\n");
        } else {
          let arreglo = datos.toString().split("\n");
          for (i = arreglo.length - 5; i < arreglo.length; i++) {
            process.stdout.write("" + arreglo[i] + "\n");
          }
        }
      });
    });
    setTimeout(function () {
      //const endTime = new Date();
      process.stdout.write("prompt >");
    }, 500);
    //process.stdout.write("prompt >");
  },
  curl: function (direccion) {
    let vatiable;
    request.get(direccion).on("response", function (error, body) {
      if (error) {
        console.error(error);
        return;
      }
      vatiable = body;
      process.stdout.write(vatiable);
    });

    //setTimeout(function () {
    //const endTime = new Date();
    //let aux = vatiable.uri;
    //for(const key in vatiable){
    //
    //    }
    // process.stdout.write(vatiable);
    //}, 800);
    //process.stdout.write(aux);
    // arreglo = archivos.split(" ");
    //  arreglo.forEach((element) => {
    //    fs.readFile("./" + element, (err, datos) => {
    //      if (err) {
    //        process.stdout.write(err + "\n");
    //      } else {
    //        let arreglo = datos.toString().split("\n");
    //        for (i = arreglo.length - 5; i < arreglo.length; i++) {
    //          process.stdout.write("" + arreglo[i] + "\n");
    //        }
    //      }
    //    });
    //   });
    //   setTimeout(function () {
    //const endTime = new Date();
    //     process.stdout.write("prompt >");
    //  }, 500);
    //process.stdout.write("prompt >");
  },
  //function tail(args){

  //  let file=args.join("")
  //
  //   fs.readFile(file, 'utf8', (error, data) => {
  //        if (error) {
  //          console.error('Error al leer el archivo:', error);
  //          return;
  //        }
  //
  //        let lines=data.split("\n");
  //        let response=lines.slice(-10).join("\n");
  //        process.stdout.write(response);
  //        process.stdout.write('\nprompt > ');
  //
  //      })
  // }
};
