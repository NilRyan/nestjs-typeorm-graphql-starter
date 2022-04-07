import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { User } from '../models/user.model';

@InputType()
export class UpdateUserInput extends PartialType(User) {
  @Field(() => ID)
  id: string;
}
