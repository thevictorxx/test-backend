require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  console.log("Hola Mundo")
  res.json({
    "mensaje": {
      "es": "hola mundo",
      "en": "Hello World!"
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Cambio N°2")
  console.log(`App listening on ${PORT}`);
});