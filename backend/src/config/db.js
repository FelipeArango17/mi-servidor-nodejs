import mongoose from "mongoose";   

const conectarDB = async () => { // Esperar respuesta de la conexion
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI); // Establece la conexion -> Lee variables de entorno
        console.log(`MongoDB conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error al conectar MongoDB: ${error.message}`);
        process.exit(1); // Terminar el proceso con error
    }
};

export default conectarDB;