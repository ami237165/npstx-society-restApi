import { Module } from '@nestjs/common';
import { SocietiesService } from './societies.service';
import { SocietiesController } from './societies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Society, SocietySchema } from './entities/society.schema';
import { ImpUserPwd, ImpUserPwdSchema } from './entities/impUser.schema';
import { McInfo, McInfoSchema } from './entities/mcInfo.schema';

@Module({
  controllers: [SocietiesController],
  providers: [SocietiesService],
  imports:[
    MongooseModule.forFeature([{name: Society.name, schema:SocietySchema}]),
    MongooseModule.forFeature([{name: ImpUserPwd.name, schema:ImpUserPwdSchema}]),
    MongooseModule.forFeature([{name: McInfo.name, schema:McInfoSchema}]),

  ]
})
export class SocietiesModule {}
