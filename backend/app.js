import express from 'express';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PORT}`)
})
