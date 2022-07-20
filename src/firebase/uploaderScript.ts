import { StorageReference, uploadBytes } from "firebase/storage";


// 'file' comes from the Blob or File API
 export const uploadSocietyImg = async (storageRef: StorageReference,file:File) => {
  console.log(file);
  
     await uploadBytes(storageRef, file).then((snapshot) => {
        console.log(`Uploaded a blob or file! ${snapshot}`);
      });
 }   
    

    


