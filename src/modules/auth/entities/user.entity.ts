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

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
