import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
const dotenv = require('dotenv').config()v)

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`;


@Module({
  imports: [
    MongooseModule.forRoot(uri),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
