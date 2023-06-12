import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1686584716922 implements MigrationInterface {
    name = 'Migrations1686584716922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`rol\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`fecha_creacion\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`update_at\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`create_at\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`fecha_creacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`rol\` varchar(5) NOT NULL`);
    }

}
