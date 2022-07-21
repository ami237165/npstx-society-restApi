import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FirebaseStuffService } from './firebase-stuff.service';
import { CreateFirebaseStuffDto } from './dto/create-firebase-stuff.dto';
import { UpdateFirebaseStuffDto } from './dto/update-firebase-stuff.dto';
import { FileInterceptor } from '@nestjs/platform-express';
// import { imagesRef } from './firebaseReferences';
import { ref } from "firebase/storage";
import { storage } from "./firebaseConfig";

@Controller('firebase-stuff')
export class FirebaseStuffController {
  constructor(private readonly firebaseStuffService: FirebaseStuffService) {}

  @Post('profile')
  @UseInterceptors(FileInterceptor('image'))
  create(@UploadedFile() file ,@Body() body:CreateFirebaseStuffDto){
    console.log("whwaaaaa");
    const buffer = file.buffer;
    const base64 = buffer.toString('base64');
    console.log(base64);
    
    const imagesRef = ref(storage, '/societyProfile/' + file.originalname);
    return this.firebaseStuffService.create(imagesRef, base64);
  }

  @Get()
  findAll() {
    return this.firebaseStuffService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.firebaseStuffService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFirebaseStuffDto: UpdateFirebaseStuffDto) {
    return this.firebaseStuffService.update(+id, updateFirebaseStuffDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.firebaseStuffService.remove(+id);
  }
}
