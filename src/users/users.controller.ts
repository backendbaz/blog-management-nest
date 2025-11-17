import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  @Get('{/:id}')
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('offset', new DefaultValuePipe(1), ParseIntPipe) offset: number,
  ) {
    console.log(getUsersParamDto);
    console.log(`limit: ${limit} - offset: ${offset}`);
    return 'This action returns all users.';
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    console.log(typeof createUserDto);
    console.log(createUserDto instanceof CreateUserDto);
    return 'This action creates a user.';
  }

  @Patch()
  public updateUser(@Body() updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return 'This action updates a user.';
  }
}
