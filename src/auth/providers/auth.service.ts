import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from '../../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}

  public login(email: string, password: string, id: string) {
    const user = this.usersService.findOneById(id);
    console.log(user);
    console.log(email);
    console.log(password);
    return 'SAMPLE_TOKEN_XXXX';
  }

  public isAuth() {
    return true;
  }
}
