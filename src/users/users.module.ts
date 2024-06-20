import { Module } from "@nestjs/common";
import { MongooseModule,  } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas/User.schema";
import { usersService } from "./users.service";
import { UsersController } from "./user.controller";


@Module({
  imports: [
    MongooseModule.forFeature([{
        name: User.name,
        schema: UserSchema,
}])
  ],
  controllers: [UsersController],
  providers: [usersService],
})
export class usersModule{}
