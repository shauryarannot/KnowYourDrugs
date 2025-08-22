import mongoose from 'mongoose';
import basicAuth from "../middlewares/basicAuth.js";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String }
});

app.use("/api/auth", basicAuth, authRoutes);
const User = mongoose.model('User', userSchema);
export default User;


