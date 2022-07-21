import { Module } from '@nestjs/common';
import { FirebaseStuffService } from './firebase-stuff.service';
import { FirebaseStuffController } from './firebase-stuff.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FirebaseStuff, FirebaseStuffSchema } from './entities/firebase-stuff.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{name:FirebaseStuff.name, schema:FirebaseStuffSchema}])
  ],
  controllers: [FirebaseStuffController],
  providers: [FirebaseStuffService]
})
export class FirebaseStuffModule {}
