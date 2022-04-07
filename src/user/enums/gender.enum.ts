import { registerEnumType } from '@nestjs/graphql';

enum Gender {
  Male = 'Male',
  Female = 'Female',
}
export default Gender;
registerEnumType(Gender, { name: 'Gender', description: 'The users gender' });
