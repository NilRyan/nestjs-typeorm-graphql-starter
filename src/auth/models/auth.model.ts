import { ObjectType } from '@nestjs/graphql';
import { User } from '../../user/models/user.model';
import { Token } from './token.model';

@ObjectType()
export class Auth extends Token {
  user: User;
}
