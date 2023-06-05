import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1683474064204 implements MigrationInterface {
  name = 'Migrations1683474064204';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`Recibos\` (\`recibo_id\` int NOT NULL AUTO_INCREMENT, \`numero_documento\` int NOT NULL, \`fecha\` date NOT NULL, \`numero_control\` int NOT NULL, \`id_rmfi\` varchar(255) NOT NULL, \`id_contribuyente\` varchar(255) NOT NULL, \`denominacion\` varchar(255) NOT NULL, \`codigo\` varchar(255) NOT NULL, \`referencia\` varchar(255) NOT NULL, \`detalle\` varchar(255) NOT NULL, \`monto\` decimal(20,2) NOT NULL, \`id_banco\` smallint NOT NULL, \`observancion\` varchar(255) NOT NULL, \`liquidador\` varchar(255) NOT NULL, \`liquidador_referencia\` varchar(255) NOT NULL, \`fecha_liquidacion\` date NOT NULL, \`petro_liquidacion\` decimal(20,2) NOT NULL, \`cajero\` varchar(255) NOT NULL, \`st_solven\` int NOT NULL, \`hora\` time NOT NULL, \`numero_caja\` int NOT NULL, \`estado\` tinyint NOT NULL, UNIQUE INDEX \`IDX_7b96abbad4a6d8254a90ab9313\` (\`numero_documento\`), UNIQUE INDEX \`IDX_d8dc8f38d4c69cbc98fbc391e1\` (\`numero_control\`), PRIMARY KEY (\`recibo_id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_d8dc8f38d4c69cbc98fbc391e1\` ON \`Recibos\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_7b96abbad4a6d8254a90ab9313\` ON \`Recibos\``,
    );
    await queryRunner.query(`DROP TABLE \`Recibos\``);
  }
}
