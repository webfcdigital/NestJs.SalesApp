import { InputType, Field, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID, IsNumber } from 'class-validator';

@InputType()
export class UpdateVendaItemInput {
  @Field(() => String)
  @IsUUID()
  @IsNotEmpty()
  produtoId: string;

  @Field(() => Float)
  @IsNumber()
  quantidade: number;

  @Field(() => Float)
  @IsNumber()
  valorUnitario: number;

  @Field(() => Float)
  @IsNumber()
  desconto: number;

  @Field(() => Float)
  @IsNumber()
  totalItem: number;
}
