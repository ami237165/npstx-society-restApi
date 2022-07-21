import { Injectable } from '@nestjs/common';
import { CreateFirebaseStuffDto } from './dto/create-firebase-stuff.dto';
import { UpdateFirebaseStuffDto } from './dto/update-firebase-stuff.dto';
import { StorageReference, uploadBytes, uploadBytesResumable, uploadString } from "firebase/storage";


@Injectable()
export class FirebaseStuffService {
  async create(reference: StorageReference, file: ArrayBuffer | Uint8Array | Blob){
    // console.log("in create");
    // console.log("in return");
    try {
    // console.log("in try");
    await uploadBytes(reference, file).then((snapshot) => {
        console.log(`Uploaded a blob or file! ${snapshot}`);
      }).catch((err) => {
        console.log(err);
        
      });
      
    } catch (error) {
      console.log(error);
      
    }
  }

  findAll() {
    return `This action returns all firebaseStuff`;
  }

  findOne(id: number) {
    return `This action returns a #${id} firebaseStuff`;
  }

  update(id: number, updateFirebaseStuffDto: UpdateFirebaseStuffDto) {
    return `This action updates a #${id} firebaseStuff`;
  }

  remove(id: number) {
    return `This action removes a #${id} firebaseStuff`;
  }
}
