import { baseStaticPath, isProd } from '../constants'

export class Util {
  
  static getAssetUrl(path: string) {
    return isProd ? baseStaticPath + path : path;
  }

  static getDatabaseConnection() {
  } 
}