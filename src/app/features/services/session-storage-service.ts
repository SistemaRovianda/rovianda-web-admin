// import { SessionStorage } from '../models/session-storage';

// export class SessionStorageService {
//     sessionStorgaeModel: SessionStorage = new SessionStorage();

//     public set(key: string, value: string) {
//         this.sessionStorgaeModel[key] = value;
//     }
//     get(key: string): string {
//         return this.sessionStorgaeModel[key]
//     }
//     remove(key: string) {
//         this.sessionStorgaeModel[key] = null;
//     }
//     clear() {
//         localStorage.setItem('user', null);
//         this.sessionStorgaeModel = new SessionStorage();
//     }

//     isLogin(): boolean {
//         return (this.sessionStorgaeModel.uid.length) ? true : false;
//     }
// }
