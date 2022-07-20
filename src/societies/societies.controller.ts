import { StaffInfoDto } from './dto/staffInfo.dto';
import { Body, Controller, Post,Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ImpUserPwdDto } from './dto/impUser.dto';
import { McInfoDto } from './dto/mcInfo.dto';
import { SocietiesDTO } from './dto/societies.dto';
import { SocietiesService } from './societies.service';
import { VenderInfoDto } from './dto/vendorInfo.dto';
import { SocietyDocDto } from './dto/societyDocument.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('societies')
export class SocietiesController {
  constructor(private readonly societiesService: SocietiesService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('societymg'))
  async saveSociety(@Body() body:SocietiesDTO, @UploadedFile() societymg):Promise<any>{
    return await this.societiesService.saveSociety(body, societymg)
  }

  //editing society
  @Put('edit')
  async editSociety(@Body() body:SocietiesDTO):Promise<any>{
    return await this.societiesService.editSociety(body);
  }

  //createing ImpUserPwd
  @Post('createImpUser')
  async createImpUser(@Body() body:ImpUserPwdDto){
    return await this.societiesService.createImpUser(body)
  }


  //creating mcInfo
  @Post('createMcInfo')
  async createMcInfo(@Body() body:McInfoDto):Promise<any>{
    return await this.societiesService.createMcInfo(body);
  }

  //creating staffInfo
  @Post('/createStaffInfo')
  async createStaffInfo(@Body() body:StaffInfoDto):Promise<any>{
    return await this.societiesService.createStaffInfo(body)
  }

  //creating vendor info
  @Post('/createVendorInfo')
  async createVendorInfo(@Body() body:VenderInfoDto):Promise<any>{
    return await this.societiesService.createVenderInfo(body)
  }

  //creating societydoc
  @Post('/createSocietyDoc')
  async societyDoc(@Body() body:SocietyDocDto):Promise<any>{
    return await this.societiesService.createSocietyDoc(body)
  }
}
