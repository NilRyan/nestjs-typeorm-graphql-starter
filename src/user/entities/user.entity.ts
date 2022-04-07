import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import Gender from '../enums/gender.enum';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ unique: true })
  email: string;
  @Column()
  firstName?: string;
  @Column()
  lastName?: string;
  @Column({ type: 'date' })
  birthDate: Date;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender: Gender;
  @Column()
  password: string;
}
