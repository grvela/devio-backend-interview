export class CreateOptionDto {
  /**
   * Nome do adicional
   * @example "Bacon"
   */
  readonly name: string;
  /**
   * Texto de descrição do adicional
   * @example "1x bacon 50g"
   */
  readonly description: string;
  /**
   * Valor do adicional
   * @example 1.99
   */
  readonly value: number;
  /**
   * URL da imagem do adicional
   * @example "https://exemplo.com/imagem-produto.jpg"
   */
  readonly image: string;
}
