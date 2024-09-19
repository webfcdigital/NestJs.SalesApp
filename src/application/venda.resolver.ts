import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Venda } from 'src/domain/entities/venda.entity';
import { VendaService } from 'src/services/venda.service';
import { CreateVendaInput } from './dtos/create-venda.input';

@Resolver(() => Venda)
export class VendaResolver {
  constructor(private readonly vendaService: VendaService) {}

  @Query(() => [Venda], { name: 'listarVendas' })
  async listarVendas(): Promise<Venda[]> {
    return this.vendaService.listarVendas();
  }

  @Query(() => Venda, { name: 'obterVendaPorId' })
  async obterVendaPorId(@Args('id') id: number): Promise<Venda> {
    return this.vendaService.obterVendaPorId(id);
  }

  @Mutation(() => Venda)
  async criarVenda(
    @Args('createVendaInput') createVendaInput: CreateVendaInput,
  ): Promise<Venda[]> {
    return this.vendaService.criarVenda(createVendaInput);
  }
}
