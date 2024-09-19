import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendaResolver } from 'src/application/venda.resolver';
import { VendaRepository } from 'src/infra/repository/venda.repository';
import { VendaService } from 'src/services/venda.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([VendaRepository]), // Repositório do TypeORM
  ],
  providers: [VendaService, VendaResolver],
  exports: [VendaService],
})
export class VendaModule {}
