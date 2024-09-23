import { Field, ObjectType } from '@nestjs/graphql';
import { VendaDto } from './venda.dto';

@ObjectType()
export class ProdutoVendaDto {
  @Field()
  id: string;

  @Field()
  produtoId: string;

  @Field()
  valorUnitario: number;

  @Field()
  quantidade: number;
  @Field()
  desconto: number;
  @Field(() => VendaDto, { nullable: true })
  venda?: VendaDto;
}
