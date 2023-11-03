import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: number;

  @Column()
  tag: string;

  @Column()
  title: string;

  @Column()
  short_description: string;

  @Column('text')
  long_description: string;

  @Column('float')
  value: number;

  @Column()
  image: string;
}
