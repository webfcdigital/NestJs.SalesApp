import { Injectable } from '@nestjs/common';
import { VendaDto } from 'src/application/dtos/venda.dto';
import { Venda } from 'src/domain/entities/venda.entity';
import { VendaRepository } from 'src/infra/repository/venda.repository';


@Injectable()
export class VendaService {
  constructor(private readonly vendaRepository: VendaRepository) {}

  async criarVenda(data: any): Promise<Venda> {
    // Aqui pode-se implementar regras de negócio, como verificar se o produto existe, aplicar descontos, etc.
    return this.vendaRepository.criarVenda(data);
  }

  async listarVendas(): Promise<VendaDto[]> {
    const vendas = await this.vendaRepository.listarTodas();

    const vendasDto = vendas.map((venda) => ({
      id: venda.id,
      date: venda.data,
      valorTotal: venda.valorTotal,
      cancelado: venda.cancelado,
      produtos: venda.produtos.map((produto) => ({
        id: produto.id,
        produtoId: produto.produtoId,
        valorUnitario: produto.valorUnitario,
        quantidade: produto.quantidade,
        desconto: produto.desconto,
        cancelado: venda.cancelado,
      })),
    }));
    return vendasDto;
  }

  async obterVendaPorId(id: number): Promise<VendaDto> {
    const vendaById = await this.vendaRepository.obterPorId(id);
    const vendaDto = { 
      id: vendaById.id,
      date: vendaById.data,
      valorTotal: vendaById.valorTotal,
      cancelado: vendaById.cancelado,
      produtos: vendaById.produtos.map((produto) => ({
        id: produto.id,
        produtoId: produto.produtoId,
        valorUnitario: produto.valorUnitario,
        quantidade: produto.quantidade,
        desconto: produto.desconto
      }))
    };
    return vendaDto; 
  }
}
