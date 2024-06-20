import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/schemas/User.schema";
import {Model} from 'mongoose'
import { craeteUserDto } from "./dto/CreateUser.dto";

@Injectable()
export class usersService {
    constructor(
        @InjectModel(User.name) private userModel:Model<User >
    ){}


    createUser(createUserDto: craeteUserDto) {
        const newUser = new this.userModel(createUserDto);
        return newUser.save();

    }

    getUsers() {
        return this.userModel.find()
    }
    getUserById(id: string) {
        return this.userModel.findById(id)
    }
}