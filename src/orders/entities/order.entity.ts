import { Option } from 'src/options/entities/option.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, { eager: true })
  @JoinTable({ name: 'product_id' })
  product: Product;

  @ManyToMany(() => Option, { eager: true })
  @JoinTable({ name: 'option_id' })
  options: Option[];

  @Column('integer')
  amount: number;

  @Column()
  notes: string;

  @Column()
  paymentType: string;

  @Column('float')
  totalPrice: number;

  //TODO-Falta adicionar o nome do cliente
  //TODO - Falta adicionar o status do produto ['requested','inProgress','finished', 'cancelled]
}
