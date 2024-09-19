import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProdutoVenda } from './produto-venda.entity';

@Entity('vendas')
export class Venda {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'date' })
  data: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorTotal: number;

  @Column()
  clienteId: string; // External Identity (CRM)

  @Column()
  filialId: string; // External Identity (Gestão de Filiais)

  @OneToMany(() => ProdutoVenda, (produtoVenda) => produtoVenda.venda, {
    cascade: true,
  })
  produtos: ProdutoVenda[];

  @Column({ default: false })
  cancelado: boolean;
}
