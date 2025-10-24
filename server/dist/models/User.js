import mongoose, { Schema } from 'mongoose';
const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true },
    providers: {
        shotstack: { type: String },
        creatomate: { type: String },
        plainly: { type: String },
        tavus: { type: String },
    },
}, { timestamps: true });
export const User = mongoose.model('User', UserSchema);
//# sourceMappingURL=User.js.map