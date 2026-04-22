import 'dotenv/config'; // Carga las variables de .env automaticamente
import express from 'express';
import conectarDB from './config/db.js';

// Conectar base de datos
conectarDB();

const app = express();
const PORT = 3000;

// Middleaware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: 'Servidor funcionando correctamente',
        entorno: process.env.NODE_ENV || 'desarrollo'
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});