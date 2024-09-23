// src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

// Módulos da Aplicação
import { VendaModule } from './modules/venda/venda.module';

// Logging
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [
    // Configuração Global de Ambiente
    ConfigModule.forRoot({
      isGlobal: true, // Disponibiliza as variáveis de ambiente em todo o projeto
      envFilePath: '.env', // Caminho para o arquivo .env
    }),

    // Configuração do Logger com Winston
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.colorize(),
              winston.format.timestamp(),
              winston.format.printf(({ timestamp, level, message }) => {
                return `${timestamp} [${level}]: ${message}`;
              }),
            ),
          }),
          // Adicione outros transports conforme necessário (ex: arquivos, serviços externos)
        ],
      }),
    }),

    // Configuração do TypeORM com PostgreSQL
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'db'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'webfc'),
        password: configService.get<string>('DB_PASSWORD', 'NestJS@2024'),
        database: configService.get<string>('DB_NAME', 'Mouts.123vendas'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'], // Carrega automaticamente as entidades
        synchronize: true, // Não recomendado para produção
      }),
    }),

    // Configuração do GraphQL com ApolloDriver
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Gera o schema automaticamente
      sortSchema: true, // Ordena o schema gerado
      playground: true, // Ativa o Playground para testes
      context: ({ req }) => ({ headers: req.headers }), // Contexto para autenticação, etc.
    }),

    // Importação dos Módulos de Domínio
    VendaModule, // Módulo de Vendas
    // Adicione outros módulos aqui (ex: EstoqueModule, CRMModule)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
