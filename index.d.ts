interface Version {
    readonly version: string;
    readonly filename: string;
    readonly hash: string;
    readonly upgrade: string;
}

interface Auth {
    readonly access_token: string;
    readonly token_type: string;
    readonly expires_in: number;
}

interface User {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly beta: number;
    readonly point: number;
}

interface App {
    readonly id: number;
    readonly name: string;
    readonly tag: string;
    readonly install_path: string;
    readonly exec_file: string;
    readonly trial: number;
    readonly free: number;
    readonly have: number;
    readonly asmr: number;
    readonly point: number;
    readonly test: null;
    readonly released: number;
    readonly build_id: number;
    readonly version: string;
    readonly beta: number;
    readonly zipsize: number;
    readonly depots: {[region: string]: Depot};
}

interface Depot {
    readonly depot_name: string;
    readonly released: number;
    readonly build_id: number;
    readonly version: string;
    readonly beta: number;
    readonly zipsize: number;
}

interface Faqs {
    readonly title: string;
    readonly content: string;
}

interface FileChunk {
    /** unknown-id */0: number;
    /** startOffset */1: number;
    /** endOffset */2: number;
    /** md5 */3: string;
}

interface FileDesc {
    /** filename */0: string;
    /** unknown-id */1: number;
    /** startOffset */2: number;
    /** endOffset */3: number;
    /** md5 */4: string;
    /** chunks */5: FileChunk[];
}

interface GameFiles {
    readonly build_id: number;
    readonly from_build_id: number;
    readonly filename: string;
    readonly version: string;
    readonly depot: string;
    readonly files: {
        readonly add: FileDesc[];
        readonly update: FileDesc[];
        readonly delete: FileDesc[];
    }
}

interface Sign {
    /** URL */
    0: string;
    /** Expires */
    1: number;
    /** Key-Pair-Id */
    2: string;
    /** Signature */
    3: string;
}

export const login: (email: string, passwd: string) => Promise<Auth>
export const logout: (auth: Auth) => Promise<null>
export const version: () => Promise<Version>
/**
 * @param {number} size 0 = cover, 1 = banner
 */
export const getImage: (tag: string, size?: number) => Promise<Buffer>
export const getCover: (tag: string) => Promise<Buffer>
export const getApps: (auth: Auth, category?: number) => Promise<App[]>
export const getDownloadUrl: (gameFiles: GameFiles, user: User, sign: Sign) => string
export const getGameFiles: (auth: Auth, buildId: number) => Promise<GameFiles>
export const info: (auth: Auth) => Promise<User>
export const faqs: () => Promise<Faqs>
export const refresh: (auth: Auth) => Promise<Auth>
export const signUrl: (auth: Auth, buildId: number, uuid: string) => Promise<Sign>