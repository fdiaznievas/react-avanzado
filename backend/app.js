import express from 'express';
import cors from 'cors';
import sequelize from './db.js';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static('../frontend'));

// Iniciar la base de datos
// sequelize.sync({force: true});
sequelize.sync();

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde el backend!' });
});

app.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
