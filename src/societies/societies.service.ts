import { Injectable } from '@nestjs/common';
import { SocietiesDTO } from './societies.dto';
import { Model } from 'mongoose'
import { InjectModel} from '@nestjs/mongoose'
import { Society, SocietyDocument } from './entities/society.schema';
import { logger } from 'src/logger';


@Injectable()
export class SocietiesService {
    constructor(
        @InjectModel(Society.name)
        private societyModel:Model<SocietyDocument>,
    ){}

    //create society
    async saveSociety(body:SocietiesDTO):
    Promise<{ status: boolean, id?: string, msg:string}>{
        return new Promise(async (resolve,reject) => {
            const matchRegNo = await this.societyModel.find({ "regNo":body.regNo});
            if(matchRegNo.length >= 1){
                logger.info(`the society with registration no ${matchRegNo[0].regNo} is already exist`)
                resolve({status:false, msg:"exist"})
            }else{
                const tmp = new this.societyModel(body);
                const societyObj = await tmp.save()
                resolve({status:true, msg:"created successfully"});
            }
        })
    }

    // update or edit society
    async editSociety(body:SocietiesDTO):Promise<{status:boolean, msg:string}>{
        return new Promise(async (resolve, reject)=>{
            //find the society
            const society = await this.societyModel.find({"regNo":body.regNo});
            if(society.length > 0){
                const data = await this.societyModel.updateOne({regNo:body.regNo}, {$set:body});
                resolve({status:true, msg:"societyUpdated"})
            }else{
                resolve({ status:false, msg:"society Not found"})

            }
        })

    }
}
