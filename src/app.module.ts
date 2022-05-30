import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@treinamento.msehaga.mongodb.net/test',
    ),
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
