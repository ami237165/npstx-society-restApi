import { Member, MemberSchema } from './entities/member.entity';
import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [MemberController],
  providers: [MemberService],
  imports:[
    MongooseModule.forFeature([{name: Member.name, schema: MemberSchema}])
  ]
})
export class MemberModule {}
