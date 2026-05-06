// Models

import generateId from "../helpers/generateId";
import mongoose from "mongoose";

// Schema -> Definir estructura y reglas de los documentos que voy a guardar MongoDB

const veterinarySchema = mongoose.Schema({ 
    name: {
        type: String,
        required: true, 
        trim: true
    },
    password: {
        type: String,
        required: true // Obligatorio
    },
    email: {
        type: String,
        required: true, // Obligatorio 
        unique: true,
        trim: true // Eliminar o limpiar espacios en blancos 
    },
    phone: {
        type: String,
        default: null,
        trim: true
    },
    web: {
        type: String,
        default: null
    },
    token: {
        type: String,
        default: null
    },
    confirm: {
        type: Boolean,
        default: false
    }
});

const Veterinary = mongoose.model('Veterinary', veterinarySchema);
export default Veterinary;