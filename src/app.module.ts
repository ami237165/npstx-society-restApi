import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocietiesModule } from './societies/societies.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberModule } from './member/member.module';


@Module({
  imports: [
    SocietiesModule,
    MongooseModule.forRoot('mongodb://103.150.136.70',{
  dbName:'societydb'
}),
    MemberModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
