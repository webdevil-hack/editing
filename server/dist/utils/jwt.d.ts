export interface JwtPayload {
    userId: string;
}
export declare function signJwt(payload: JwtPayload): string;
export declare function verifyJwt(token: string): JwtPayload;
//# sourceMappingURL=jwt.d.ts.map