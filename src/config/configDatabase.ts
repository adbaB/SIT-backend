import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      port: parseInt(process.env.PORT_POSTGRES, 10),
      host: process.env.HOST_POSTGRES,
      username: process.env.USERNAME_POSTGRES,
      password: process.env.PASSWORD_POSTGRES,
      databaseName: process.env.NAME_DATABASE_POSTGRES,
      schema: process.env.SCHEMA_POSTGRES,
    },
  };
});
