import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Venda } from 'src/domain/entities/venda.entity';
import { VendaService } from 'src/services/venda.service';
import { CreateVendaInput } from './dtos/create-venda.input';
import { VendaDto } from './dtos/venda.dto';

@Resolver(() => VendaDto)
export class VendaResolver {
  constructor(private readonly vendaService: VendaService) {}

  @Query(() => [VendaDto], { name: 'listarVendas' })
  async listarVendas(): Promise<VendaDto[]> {
    return await this.vendaService.listarVendas();
  }

  @Query(() => VendaDto, { name: 'obterVendaPorId' })
  async obterVendaPorId(@Args('id') id: number): Promise<VendaDto> {
    return await this.vendaService.obterVendaPorId(id);
  }

  @Mutation(() => VendaDto, { name: 'criarVenda' })
  async criarVenda(
    @Args('createVendaInput') createVendaInput: CreateVendaInput,
  ): Promise<CreateVendaInput> {
    const createVenda = await this.vendaService.criarVenda(createVendaInput);
    return createVendaInput; 
  }
}
