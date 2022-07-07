import { Controller, Get, Put, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post('create')
  async create(@Body() createMemberDto: CreateMemberDto):Promise<any>{
    return await this.memberService.createMember(createMemberDto);
  }

  //update member
  @Put('update')
  async update(@Body() updateMemberDto:UpdateMemberDto):Promise<any>{
    return await this.memberService.updateMember(updateMemberDto)
  }
  
  //soft delete
  @Put('delete')
  async delete(@Body() createMemberDto:CreateMemberDto):Promise<any>{
    return await this.memberService.delete(createMemberDto)
  }

}
