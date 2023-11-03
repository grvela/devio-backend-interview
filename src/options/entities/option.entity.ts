import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('options')
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('float')
  value: number;

  @Column()
  image: string;
}
