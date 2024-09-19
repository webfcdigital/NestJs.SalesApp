import { Venda } from 'src/domain/entities/venda.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Venda)
export class VendaRepository extends Repository<Venda> {
  async criarVenda(data: any): Promise<Venda[]> {
    const venda = this.create(data);
    return this.save(venda);
  }

  async listarTodas(): Promise<Venda[]> {
    return this.find();
  }

  async obterPorId(id: number): Promise<Venda> {
    return this.findOne({ where: { id } });
  }
}
