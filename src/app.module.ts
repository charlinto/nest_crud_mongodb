import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { usersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/nest'),usersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
