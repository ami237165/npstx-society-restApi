import { MemberModule } from './member/member.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocietiesModule } from './societies/societies.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GcsModule } from './gcs/gcs.module';


@Module({
  imports: [
    SocietiesModule,
    MemberModule,
    MongooseModule.forRoot('mongodb://103.150.136.70',{
  dbName:'societydb'
}),
    GcsModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
