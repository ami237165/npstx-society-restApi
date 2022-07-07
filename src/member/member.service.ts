import { Member, MemberDocument } from './entities/member.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Model } from 'mongoose'
import { logger } from 'src/logger';

@Injectable()
export class MemberService {
  constructor(
    @InjectModel(Member.name)
    private memberModel:Model<MemberDocument> ){}

  async createMember(createMemberDto: CreateMemberDto):Promise<{status:boolean, msg:string}>{
    return new Promise(async (resolve, reject) => {
      const alreadyExist = await this.memberModel.find({gstNo:createMemberDto.gstNo} || {panNo:createMemberDto.panNo});
      console.log(alreadyExist);
      
      if(alreadyExist.length > 0){
        logger.info("already exist")
        resolve({status:false, msg:"memeber already exist"})
      }
      else{
        const tmp = new this.memberModel(createMemberDto);
        await tmp.save()
        resolve({status:true, msg:"memeber created succesfully"})
      } 

    })
    
  }

  //updating members
  async updateMember(updateMemberDto:UpdateMemberDto):Promise<{status:boolean, msg:string}>{
    return new Promise(async (resolve, reject) => {
      const member = await this.memberModel.findById(updateMemberDto._id);
      if(member){
        await this.memberModel.updateOne({_id:updateMemberDto._id},{$set:updateMemberDto});
        resolve({status:true, msg:"updated"})
      }else{
        resolve({status:false, msg:"not found"})
      }
      
    })
  }

  //soft deleting
  async delete(createMemberDto:CreateMemberDto):Promise<{status:boolean, msg:string}>{
    return new Promise(async (resolve, reject) => {
      // const member = await this.memberModel.findById(createMemberDto._id);
      this.memberModel.findById(createMemberDto._id).update({ softDelete: true }).then(() => {
        resolve({ status: true, msg: "deleted successfully" })
    }).catch(err => reject({ status: false, error: err }))
    })
  }
}
