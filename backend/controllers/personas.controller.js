import personasService from '../services/personas.service.js';

const getAllPersonas = async (req, res) => {
    try {
        const personas = await personasService.getAllPersonas();
        res.json(personas);
    } catch (error) {
        console.error('Error al obtener las personas:', error);
        res.status(500).json({ error: 'Error al obtener las personas' });
    }
}

export default { getAllPersonas };