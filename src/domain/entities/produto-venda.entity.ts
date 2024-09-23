import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Venda } from './venda.entity';

@Entity('produtos_vendas')
export class ProdutoVenda {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  produtoId: string; // External Identity (Gestão de Produtos)

  @Column({ type: 'int' })
  quantidade: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorUnitario: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  desconto: number;

  @ManyToOne(() => Venda, (venda) => venda.produtos)
  venda: Venda;
}
