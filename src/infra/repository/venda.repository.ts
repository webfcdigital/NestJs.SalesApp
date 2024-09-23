import { Venda } from 'src/domain/entities/venda.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Venda)
export class VendaRepository extends Repository<Venda> {
  // Método para criar uma venda
  async criarVenda(data: Partial<Venda>): Promise<Venda> {
    const venda = this.create(data); // Cria a entidade com os dados parciais
    return await this.save(venda); // Salva a venda no banco
  }

  // Método para listar todas as vendas
  async listarTodas(): Promise<Venda[]> {
    return await this.find(); // Retorna todas as vendas
  }

  // Método para obter uma venda por ID
  async obterPorId(id: number): Promise<Venda | undefined> {
    return await this.findOne({ where: { id } }); // Encontra a venda pelo ID
  }
}
