import { Option } from 'src/options/entities/option.entity';
import { Product } from 'src/products/entities/product.entity';

export class CreateOrderDto {
  /**
   * Produto escolhido no pedido
   */
  product: Product;
  /**
   * Lista de adicionais ao produto
   */
  options: Option[];
  /**
   * Quantidade de produtos escolhidos
   */
  amount: number;
  /**
   * Observações do cliente ao pedido
   */
  notes: string;
  /**
   * Tipo de pagamento do cliente
   */
  paymentType: string;
  /**
   * Preço total do pedido
   */
  totalPrice: number;
}
