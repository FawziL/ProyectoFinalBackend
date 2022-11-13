import express from "express";
import rutas from "./routes/index.js";
const app = express();
import config from "./config/config.js";
import mongoose from "mongoose"
mongoose.connect(config.mongodb)
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use("/", rutas);
app.use(express.static(__dirname + "/public"));
app.listen(config.port, () => {
  console.log(`Servidor escuchando puerto ${config.port}`);
});