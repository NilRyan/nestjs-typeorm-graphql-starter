import { UserEntity } from './../entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { RegisterInput } from '../../auth/dto/register.input';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(registrationData: RegisterInput): Promise<UserEntity> {
    const newUser = this.create(registrationData);
    return await this.save(newUser);
  }
}
