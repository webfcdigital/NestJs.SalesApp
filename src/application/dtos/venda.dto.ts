import { Field, ObjectType } from '@nestjs/graphql';
import { ProdutoVendaDto } from './produto-venda.dto';

@ObjectType()
export class VendaDto {
  @Field()
  id: number;

  @Field()
  date: Date;

  @Field()
  valorTotal: number;

  @Field()
  cancelado: boolean;

  @Field(() => [ProdutoVendaDto], { nullable: true })
  produtos?: ProdutoVendaDto[];
}
