import { Module } from '@nestjs/common';
import { SocietiesService } from './societies.service';
import { SocietiesController } from './societies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Society, SocietySchema } from './entities/society.schema';

@Module({
  controllers: [SocietiesController],
  providers: [SocietiesService],
  imports:[
    MongooseModule.forFeature([{name: Society.name, schema:SocietySchema}]),
  ]
})
export class SocietiesModule {}
