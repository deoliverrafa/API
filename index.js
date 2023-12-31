const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usuarioRoutes = require('./userRoutes');
const messageRoutes = require('./messageRoutes')
const postRoutes = require('./postRoutes')
const cors = require('cors')

app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*'); // Permite solicitações de qualquer origem (não recomendado para produção)
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });

app.use(cors({
  origin: ['https://www.sociallizze.online', ,'https://sociallizze.online','http://localhost:5500','http://127.0.0.1:5500', 'sociallizze-api.up.railway.app', 'http://localhost:6700', 'http://127.0.0.1:6700'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
}))


app.use('/api', usuarioRoutes);
app.use('/mensagem', messageRoutes);
app.use('/postagem', postRoutes);

// Outras configurações e middleware...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
