import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './configDatabase';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
  ],

  exports: [ConfigModule],
})
export class configModule {}
