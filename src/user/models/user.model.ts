import { ObjectType, HideField } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class User extends BaseModel {
  email: string;
  firstName?: string;
  lastName?: string;

  @HideField()
  password: string;
}
