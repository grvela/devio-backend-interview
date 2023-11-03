export class CreateProductDto {
  /**
   * Código do produto usado para reconhecer o tipo de produto vendido ou em busca rápida
   * @example 201
   */
  readonly code: number;

  /**
   * Tag associada a categoria do produto
   * @example "Combo"
   */
  readonly tag: string;

  /**
   * Título do produto
   * @example "Smash da casa"
   */
  readonly title: string;

  /**
   * Descrição curta e com o principal atributo do produto
   * @example "1x de hambúrger 200g"
   */
  readonly short_description: string;

  /**
   * Descrição longa e com todos os atributos do produto
   * @example "1x cheddar 50g, 2x hambúrger 200g, 3x tomate"
   */
  readonly long_description: string;

  /**
   * Valor do produto unitário
   * @example 12.99
   */
  readonly value: number;

  /**
   * URL da imagem do produto
   * @example "https://exemplo.com/imagem-produto.jpg"
   */
  readonly image: string;
}
