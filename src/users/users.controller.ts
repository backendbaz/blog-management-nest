import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('{/:id}')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('offset', new DefaultValuePipe(1), ParseIntPipe) offset: number,
  ) {
    console.log(`id: ${id} -> ${typeof id}`);
    console.log(`limit: ${limit} - offset: ${offset}`);
    return 'This action returns all users.';
  }

  @Post()
  public createUsers(@Body() body: any) {
    console.log(body);
    return 'This action creates a user.';
  }
}
