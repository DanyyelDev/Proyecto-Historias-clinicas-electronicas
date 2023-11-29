// server.js
const app = require('./src/app'); // Asume que app.js es el archivo que contiene tu aplicación Express

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
