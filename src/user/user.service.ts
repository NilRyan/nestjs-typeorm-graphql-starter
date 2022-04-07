import { Injectable } from '@nestjs/common';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }
}
