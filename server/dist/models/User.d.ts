import { Document, Model } from 'mongoose';
export interface UserDocument extends Document {
    email: string;
    passwordHash: string;
    name: string;
    providers: {
        shotstack?: string;
        creatomate?: string;
        plainly?: string;
        tavus?: string;
    };
    createdAt: Date;
    updatedAt: Date;
}
export declare const User: Model<UserDocument>;
//# sourceMappingURL=User.d.ts.map