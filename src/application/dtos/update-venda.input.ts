import { InputType, Field, Float } from '@nestjs/graphql';
import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateVendaItemInput } from './update-venda-item.input';


@InputType()
export class UpdateVendaInput {
  @Field(() => [UpdateVendaItemInput])
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateVendaItemInput)
  itens: UpdateVendaItemInput[];

  @Field(() => Float)
  total: number;
}
