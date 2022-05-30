import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
    @Prop()
    name: string;

    @Prop()
    value: number;

    @Prop()
    description: string;

    @Prop()
    amount: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
