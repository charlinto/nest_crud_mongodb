import { Body, Controller, Get, HttpException, Param, Patch, Post,Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { usersService } from './users.service';
import { craeteUserDto } from './dto/CreateUser.dto';
import mongoose  from 'mongoose';
import { updateUserDto } from './dto/UpdateUser.dto';

export interface User extends Document {
    readonly name: string;
}

@Controller('users')
export class UsersController{
    constructor(private usersSerive:usersService){}

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() craeteUserDto: craeteUserDto) {
        console.log(craeteUserDto);
        return this.usersSerive.createUser(craeteUserDto)
        
    }

    @Get()
    getUsers() {
        return this.usersSerive.getUsers()

         
    }

    @Get(':id') 
    async getUserById(@Param('id') id:string){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('User Not Found!', 404);
        const findUser = await this.usersSerive.getUserById(id);
        if(!findUser) throw new HttpException('User Not found!',404)
        return findUser;
         
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateUser(@Param('id')id:string,@Body() updateUserDto: updateUserDto){
        
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('InValid Id!', 400);
        const updateUser = await this.usersSerive.updateUser(id, updateUserDto,);
        if(!updateUser) throw new HttpException('User is not Found!', 404);

        return updateUser;
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('InValid Id!', 400);
        const deleteUser = await this.usersSerive.deleteUser(id);
        if(!deleteUser) throw new HttpException('User is not Found!', 404);        
        return ;

    }

} 