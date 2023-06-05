import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1683475806045 implements MigrationInterface {
    name = 'Migrations1683475806045'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_7b96abbad4a6d8254a90ab9313\` ON \`recibos\``);
        await queryRunner.query(`DROP INDEX \`IDX_d8dc8f38d4c69cbc98fbc391e1\` ON \`recibos\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_d8dc8f38d4c69cbc98fbc391e1\` ON \`recibos\` (\`numero_control\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_7b96abbad4a6d8254a90ab9313\` ON \`recibos\` (\`numero_documento\`)`);
    }

}
