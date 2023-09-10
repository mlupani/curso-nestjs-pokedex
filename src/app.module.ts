import { join } from 'path'; // en Node
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { envConfiguration } from './config/env.config';
import { configValidationSchema } from './config/joi.validation';

@Module({
  imports: [

    ConfigModule.forRoot({
      load: [envConfiguration],
      validationSchema: configValidationSchema
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'), 
    }),

    MongooseModule.forRoot(process.env.MONGODB_URL, {
      dbName: 'pokemonsDB',
    }),

    PokemonModule,

    CommonModule,

    SeedModule,

  ],
})
export class AppModule {}
