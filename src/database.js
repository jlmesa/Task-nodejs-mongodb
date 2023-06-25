import mongoose from 'mongoose';
import { config } from 'dotenv';

config();
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Conectado a MongoDB')).catch((error) => console.error(error));