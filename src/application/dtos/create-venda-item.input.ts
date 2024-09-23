import { InputType, Field, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID, IsNumber } from 'class-validator';

@InputType()
export class CreateVendaItemInput {
  @Field(() => String)
  @IsUUID()
  @IsNotEmpty()
  produtoId: string;

  @Field(() => Float)
  @IsNumber()
  @IsNotEmpty()
  quantidade: number;

  @Field(() => Float)
  @IsNumber()
  @IsNotEmpty()
  valorUnitario: number;

  @Field(() => Float)
  @IsNumber()
  desconto: number;

  @Field(() => Float)
  @IsNumber()
  totalItem: number;
}
