import type { Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
export declare function createJob(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getJobStatus(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=editorController.d.ts.map