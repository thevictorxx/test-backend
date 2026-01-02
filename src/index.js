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

app.listen(port, () => {
  console.log(`Aplicación en puerto ${port}`);
});
