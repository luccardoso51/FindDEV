const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const http = require("http");
const { setupWebsocket } = require("./websocket");
const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-2soeh.mongodb.net/week10?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//Metodos http: HET, POST, PUT, DELETE

//Tipos de parametros:
// query params: request,query (filtros, ordenaçao, paginacao etc)
//route params: request.params (identificar um recurso na alteracao ou remoçao)
// body: request.body (dados para criacao ou alteracao de um registro)

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
