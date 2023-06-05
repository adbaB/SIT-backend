declare namespace NodeJS {
  interface ProcessEnv {
    PORT_MYSQL: number;
    HOST_MYSQL: string;
    USERNAME_MYSQL: string;
    PASSWORD_MYSQL: string;
    NAME_DATABASE_MYSQL: string;
  }
}
