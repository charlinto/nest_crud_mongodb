import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/schemas/User.schema";
import {Model} from 'mongoose'
import { craeteUserDto } from "./dto/CreateUser.dto";
import { updateUserDto } from "./dto/UpdateUser.dto";

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
    getUserById(id: string ) {
        return this.userModel.findById(id)
    }


    updateUser(id:string, updateUserDto:updateUserDto){
    return this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true})
        }

    deleteUser(id:string) {
    return this.userModel.findByIdAndDelete(id)
    }
}