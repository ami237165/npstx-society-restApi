import { Injectable } from '@nestjs/common';
import { SocietiesDTO } from './societies.dto';
import { Model } from 'mongoose'
import { InjectModel} from '@nestjs/mongoose'
import { Society, SocietyDocument } from './entities/society.schema';


@Injectable()
export class SocietiesService {
    constructor(
        @InjectModel(Society.name)
        private societyModel:Model<SocietyDocument>,
    ){}

    async saveSociety(body:SocietiesDTO):
    Promise<{ status: boolean, id?: string, msg:string}>{
        return new Promise(async (resolve,reject) => {
            const matchRegNo = await this.societyModel.find({ societyRegistrationNo:body.societyRegistrationNo});
            if(matchRegNo.length >= 1){
                resolve({status:false, msg:"exist"})
            }else{
                const tmp = new this.societyModel(body);
                const societyObj = await tmp.save()
                resolve({status:true, msg:"created successfully"});
                return societyObj;
            }
        })
    }

    async editSociety(body:SocietiesDTO):Promise<{status:boolean, msg:string}>{
        return new Promise(async (resolve, reject)=>{

            //find the society
            const society = await this.societyModel.find({societyRegistrationNo:body.societyRegistrationNo});

            
            if(society.length > 0){
                // let tmp = society[0]
                // console.log(tmp);
                // const newData = new this.societyModel(body);
                // console.log(newData);
                const data = await this.societyModel.updateOne({societyRegistrationNo:body.societyRegistrationNo}, {$set:body});
                resolve({status:true, msg:"societyUpdated"})
            }else{
                resolve({ status:false, msg:"society Not found"})

            }
        })

    }
}
