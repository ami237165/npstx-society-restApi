import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type FirebaseStuffDocument = FirebaseStuff & Document;
@Schema()
export class FirebaseStuff {
    @Prop()
    image:string
}

export const FirebaseStuffSchema = SchemaFactory.createForClass(FirebaseStuff)