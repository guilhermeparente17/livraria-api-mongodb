import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) { }

  create(createBookDto: CreateBookDto) {
    const book = new this.bookModel(createBookDto);
    return book.save();
  }

  findAll() {
    return this.bookModel.find();
  }

  findOne(id: string) {
    return this.bookModel.findById(id);
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.bookModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateBookDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.bookModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
