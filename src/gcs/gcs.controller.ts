import { multerConfig, multerOptions } from './multerConfig';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { GcsService } from './gcs.service';
import { CreateGcDto } from './dto/create-gc.dto';
import { UpdateGcDto } from './dto/update-gc.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';


@Controller('gcs')
export class GcsController {
  constructor(private readonly gcsService: GcsService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('image',10000000,multerOptions))
  async create(@Body() body: CreateGcDto, @UploadedFile() file:{path: string}):Promise<any> { 
   console.log(multerOptions.storage._handleFile());
   
  return this.gcsService.create(body)
  }

  @Get()
  findAll() {
    return this.gcsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gcsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGcDto: UpdateGcDto) {
    return this.gcsService.update(+id, updateGcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gcsService.remove(+id);
  }
}
