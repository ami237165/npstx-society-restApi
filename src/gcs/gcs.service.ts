import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Society, SocietyDocument } from 'src/societies/entities/society.schema';
import { CreateGcDto } from './dto/create-gc.dto';
import { UpdateGcDto } from './dto/update-gc.dto';
import { Model } from 'mongoose'

@Injectable()
export class GcsService {
  constructor(
    @InjectModel(Society.name)
        private societyModel: Model<SocietyDocument>,
  ){

  }
  create(body:CreateGcDto){
    return 
    // return new Promise(async (resolve, reject) => {
    //   try {
    //     const society = await this.societyModel.findById(body.societyId);
    //     const updated = society.update({"societyImg":body.image}).then((res) => {
    //       console.log(res);
    //       resolve({msg:res})
    //     }).catch((err) => {
    //       console.log(err);
    //       resolve({msg:err})
    //     })
    //   } catch (error) {
    //     console.log(error);
    //     resolve({msg:error})
    //   }
    // }) ;
  }

  findAll() {
    return `This action returns all gcs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gc`;
  }

  update(id: number, updateGcDto: UpdateGcDto) {
    return `This action updates a #${id} gc`;
  }

  remove(id: number) {
    return `This action removes a #${id} gc`;
  }
}
