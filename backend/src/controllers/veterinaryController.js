// Controller
import Veterinary from '../models/veterinary.js';

const register = async (req, res) => {
    
    // Extraer datos para validaciones o limpieza si fuera necesario
    const { email } = req.body;

    try {
        // 1. Prevenir registros duplicados (Opcional pero recomendado)
        const existeVeterinario = await Veterinary.findOne({ email });
        if (existeVeterinario) {
            const error = new Error("Usuario ya registrado");
            return res.status(400).json({ msg: error.message });
        }

        // 2. Crear la instancia del modelo con los datos de req.body
        const veterinario = new Veterinary(req.body);

        // 3. Guardar en la base de datos
        // NOTA: Usamos la instancia 'veterinario' para llamar al método .save()
        const veterinarioSave = await veterinario.save();

        // 4. Enviar respuesta de éxito y SALIR de la función
        return res.json({
            msg: 'Veterinario registrado correctamente',
            data: veterinarioSave
        });

    } catch (error) {
        console.log("Error al guardar en MongoDB:", error);
        return res.status(500).json({ 
            msg: 'Hubo un error al registrar',
            error: error.message 
        });
    }
};

const login = (req, res) => {
    const { email, password } = req.body;
    res.json({ msg: 'Desde API/veterinarios/login'});
};

const profile = (req, res) => {
    res.json({ msg: 'Desde API/veterinarios/profile' });
};

export {
    register,
    login,
    profile
};