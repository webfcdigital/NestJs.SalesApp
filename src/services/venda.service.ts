import { Injectable } from '@nestjs/common';
import { Venda } from 'src/domain/entities/venda.entity';
import { VendaRepository } from 'src/infra/repository/venda.repository';

@Injectable()
export class VendaService {
  constructor(private readonly vendaRepository: VendaRepository) {}

  async criarVenda(data: any): Promise<Venda[]> {
    // Aqui pode-se implementar regras de negócio, como verificar se o produto existe, aplicar descontos, etc.
    return this.vendaRepository.criarVenda(data);
  }

  async listarVendas(): Promise<Venda[]> {
    return this.vendaRepository.listarTodas();
  }

  async obterVendaPorId(id: number): Promise<Venda> {
    return this.vendaRepository.obterPorId(id);
  }
}
