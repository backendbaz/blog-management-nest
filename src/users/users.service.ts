import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { AuthService } from '../auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    offset: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(getUsersParamDto);
    console.log(limit);
    console.log(offset);
    console.log(isAuth);
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
