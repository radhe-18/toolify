import mongoose from 'mongoose';

const toolSchema = new mongoose.Schema({
  name: String,
  slug: { type: String, index: true },
  description: String,
  category: String,
  pricing: String,
  tags: [String],
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('Tool', toolSchema);
