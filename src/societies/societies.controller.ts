import { Body, Controller, Post,Put } from '@nestjs/common';
import { SocietiesDTO } from './societies.dto';
import { SocietiesService } from './societies.service';

@Controller('societies')
export class SocietiesController {
  constructor(private readonly societiesService: SocietiesService) {}

  @Post('create')
  async saveSociety(@Body() body:SocietiesDTO):Promise<any>{
    return await this.societiesService.saveSociety(body)
  }

  //editing society
  @Put('edit')
  async editSociety(@Body() body:SocietiesDTO):Promise<any>{
    return await this.societiesService.editSociety(body);
  }
}
