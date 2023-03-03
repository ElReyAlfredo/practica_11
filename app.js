const express = require("express"); //importamos la dependencia
const app = express(); //declaramos una App de Express
const port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor
app.use("/assets", express.static(__dirname + "/public")); //double underscore
app.use("/", function (req, res, next) {
  console.log("Request Url:" + req.url);
  next();
});

//primera ruta (esta al nivel de la raiz /), Hello World!
app.get("/", function (req, res) {
  res.send(
    `<html><head><link href="assets/style.css" type="text/css" rel="stylesheet"></head><body><h1>Hello World!</h1></body></html>`
  );
});

//tercera ruta, recibe un parametro
app.get("/person/:id", function (req, res) {
  res.send(
    `<html><head><body><h1>Person: ${req.params.id}</h1></body></head></html>`
  );
});

//segunda ruta /api, regresa un objeto JSON
app.get("/api", function (req, res) {
  res.json({ firstName: "John", lastName: "Doe" });
});

app.listen(port); //levantar el server y ponerlo a la escucha
