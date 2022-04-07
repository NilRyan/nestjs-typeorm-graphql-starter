import { ObjectType, HideField, Field } from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class User extends BaseModel {
  @Field()
  email: string;
  @Field({ nullable: true })
  firstName?: string;
  @Field({ nullable: true })
  lastName?: string;

  @HideField()
  password: string;
}
