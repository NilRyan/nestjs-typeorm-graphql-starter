import { Column, Entity } from 'typeorm';
import Gender from '../enums/gender.enum';

@Entity('users')
export class User {
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
