import express from "express";
import { createConnection } from "mysql";

const app = express();
// Configuration de la connexion à MySQL
const db = createConnection({
  host: "ws3wx.myd.infomaniak.com",
  user: "ws3wx_can_kaya",
  password: "aQzQvl2024",
  database: "ws3wx_traces",
});

// Connexion à la base de données
db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connecté à la base de données MySQL");
});

// Exemple de requête MySQL
app.get("/donnees", (req, res) => {
  db.query("SELECT * FROM", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Démarrez le serveur
const port = 5000;
app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
