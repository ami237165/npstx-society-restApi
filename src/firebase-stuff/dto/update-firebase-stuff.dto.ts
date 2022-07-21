import { PartialType } from '@nestjs/swagger';
import { CreateFirebaseStuffDto } from './create-firebase-stuff.dto';

export class UpdateFirebaseStuffDto extends PartialType(CreateFirebaseStuffDto) {}
