import { InputType, Field, Float, ObjectType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsUUID,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateVendaItemInput } from './create-venda-item.input';


@InputType()
@ObjectType()
export class CreateVendaInput {
  @Field(() => String)
  @IsUUID()
  @IsNotEmpty()
  clienteId: string;

  @Field(() => String)
  @IsUUID()
  @IsNotEmpty()
  filialId: string;

  @Field(() => [CreateVendaItemInput])
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateVendaItemInput)
  itens: CreateVendaItemInput[];

  @Field(() => Float)
  @IsNotEmpty()
  total: number;
}
