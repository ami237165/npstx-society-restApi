import { getStorage, ref } from "firebase/storage";
export const storage = getStorage();
export const storageRef = ref(storage, 'societyProfile');