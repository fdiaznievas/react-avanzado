import express from 'express';
import cors from 'cors';
import sequelize from './db.js';
import personasController from './controllers/personas.controller.js';


const app = express();
const PORT = process.env.PORT || 3200;

app.use(express.json());
app.use(cors());
app.use(express.static('../frontend'));

// Iniciar la base de datos
// sequelize.sync({force: true});
sequelize.sync();

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde el backend!' });
});

app.get('/api/personas', (req, res) => {
    // Aquí deberías implementar la lógica para obtener las personas desde la base de datos
    return personasController.getAllPersonas(req, res);
});

app.post('/api/personas', (req, res) => {
    // Aquí deberías implementar la lógica para crear una nueva persona en la base de datos
    const nuevaPersona = req.body;
    // Simulación de creación exitosa
    res.status(201).json({ mensaje: 'Persona creada exitosamente', persona: nuevaPersona });
});

app.get('/api/persona/:id', (req, res) => {
    const id = req.params.id;
    // Aquí deberías implementar la lógica para obtener una persona por ID desde la base de datos
    res.json({ id, nombre: 'Juan', edad: 30 });
});


app.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
