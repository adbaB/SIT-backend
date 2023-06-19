declare namespace NodeJS {
  interface ProcessEnv {
    PORT_MYSQL: string;
    HOST_MYSQL: string;
    USERNAME_MYSQL: string;
    PASSWORD_MYSQL: string;
    NAME_DATABASE_MYSQL: string;
    HASH_SALT: string;
    JWT_SECRET: string;
  }
}
