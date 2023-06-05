import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      port: parseInt(process.env.PORT_MYSQL, 10),
      host: process.env.HOST_MYSQL,
      username: process.env.USERNAME_MYSQL,
      password: process.env.PASSWORD_MYSQL,
      databaseName: process.env.NAME_DATABASE_MYSQL,
    },
  };
});
