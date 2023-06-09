import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1686327042221 implements MigrationInterface {
    name = 'Migrations1686327042221'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`User\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(250) NOT NULL, \`apellido\` varchar(250) NOT NULL, \`cedula\` varchar(100) NOT NULL, \`usuario\` varchar(50) NOT NULL, \`contrasena\` varchar(250) NOT NULL, \`rol\` varchar(5) NOT NULL, \`fecha_creacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`estado\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_1aeaa2f67fa8a56970c5a6b7ba\` (\`usuario\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_1aeaa2f67fa8a56970c5a6b7ba\` ON \`User\``);
        await queryRunner.query(`DROP TABLE \`User\``);
    }

}
