import { getStorage, ref } from "firebase/storage";
import {FirebaseApp} from './config'
export const storage = getStorage(FirebaseApp);
export const storageRef = ref(storage, 'societyProfile');