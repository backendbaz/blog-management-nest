import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId);
    return [
      {
        user: user,
        title: 'Title One - #1',
        content: 'Content One - #1',
      },
      {
        user: user,
        title: 'Title Two - #2',
        content: 'Content Two - #2',
      },
    ];
  }
}
