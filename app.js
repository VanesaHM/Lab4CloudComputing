const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('¡Hola desde Docker!'));

app.get('/sumar/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }
  res.json({ a, b, resultado: a + b });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));