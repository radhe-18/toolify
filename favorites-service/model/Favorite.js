import mongoose from 'mongoose';

const favSchema = new mongoose.Schema({
  user: { type: String, required: true },
  toolId: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Favorite', favSchema);
