import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm';
import { AbstractEntity } from './abstract-entity';

@Entity('todos')
export class Todo extends AbstractEntity{
  //@PrimaryGeneratedColumn()
  //id: number;

  @Column()
  todo_text!: string;

  @Column()
  isActive!: boolean;
}