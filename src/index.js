const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    "mensaje": {
      "es": "hola mundo",
      "en": "Hello World!"
    }
  });
});

app.listen(PORT, () => {
  console.log(`Aplicación en puerto ${PORT}`);
});
