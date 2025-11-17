import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from './dtos/get-users-param.dto';

@Injectable()
export class UsersService {
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    offset: number,
  ) {
    console.log(getUsersParamDto);
    console.log(limit);
    console.log(offset);
    return [
      {
        firstName: 'Amirhossein',
        lastName: 'Emadi',
        email: 'amir@example.ir',
        password: 'pass@1234',
      },
      {
        firstName: 'Zahra',
        lastName: 'Emadi',
        email: 'zahra@example.us',
        password: 'sara@9876',
      },
    ];
  }

  public findOneById(id: string) {
    console.log(id);
    return {
      id: 25,
      firstName: 'Amirhossein',
      lastName: 'Emadi',
      email: 'amir@example.ir',
      password: 'pass@1234',
    };
  }
}
