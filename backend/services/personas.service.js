import Persona from "../models/Persona.js";

const getAllPersonas = async () => {
    try {
        const personas = await Persona.findAll();
        return personas.map(persona => persona.toJSON());
    }

    catch (error) {
        console.error('Error al obtener las personas:', error);
        throw new Error('Error al obtener las personas');
    }
}

export default { getAllPersonas };