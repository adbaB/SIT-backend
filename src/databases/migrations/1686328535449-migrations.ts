import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1686328535449 implements MigrationInterface {
    name = 'Migrations1686328535449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(250) NOT NULL, \`apellido\` varchar(250) NOT NULL, \`cedula\` varchar(100) NOT NULL, \`usuario\` varchar(50) NOT NULL, \`contrasena\` varchar(250) NOT NULL, \`rol\` varchar(5) NOT NULL, \`fecha_creacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`estado\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_cdfa3de2fdbd987679c8e1aade\` (\`usuario\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_cdfa3de2fdbd987679c8e1aade\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
