import {
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  Timestamp,
} from 'typeorm';

@Entity({ name: 'dhikrs' })
export class Dhikr {
  @ObjectIdColumn()
  _id: string;

  @Column()
  title: string;

  @Column()
  data: Timestamp;

  @Column()
  count: number;

  @Column()
  currentCount: number;

  @Column()
  setCount: number;

  @Column()
  read: string;

  @Column()
  meaning: string;

  @Column()
  arabic: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
