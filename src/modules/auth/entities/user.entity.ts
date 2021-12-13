import {
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @ObjectIdColumn()
  _id: string;

  @Column()
  googleId: string;

  @Column({ unique: true })
  email: string;

  @Column()
  username: string;

  @Column()
  givenName: string;

  @Column()
  familyName: string;

  @Column()
  password: string;

  @CreateDateColumn({ default: Date.now() })
  createdAt: Date;

  @UpdateDateColumn({ default: Date.now() })
  updatedAt: Date;
}
