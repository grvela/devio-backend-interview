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
import { Status } from '../dto/status.dto';

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

  @Column('text', { array: true })
  paymentType: string[];

  @Column('float')
  totalPrice: number;

  @Column()
  clientName: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.InProgress,
  })
  status: Status;
}
