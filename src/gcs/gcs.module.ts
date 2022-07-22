import { Module } from '@nestjs/common';
import { GcsService } from './gcs.service';
import { GcsController } from './gcs.controller';
import { SocietiesModule } from 'src/societies/societies.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Society, SocietySchema } from 'src/societies/entities/society.schema';

@Module({
  imports:[SocietiesModule,
    MongooseModule.forFeature([{name: Society.name, schema:SocietySchema}]),
  ],
  controllers: [GcsController],
  providers: [GcsService],
})
export class GcsModule {}
