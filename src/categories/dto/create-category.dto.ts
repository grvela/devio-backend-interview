export class CreateCategoryDto {
  /*
    Nome da categoria
    @example "Lanches"
  */
  readonly name: string;
  /*
   * URL da imagem da categoria
  @example "https://exemplo.com/imagem-produto.jpg" 
  */
  readonly image: string;
}
