import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
export declare function getKeys(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function saveKeys(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=providerController.d.ts.map