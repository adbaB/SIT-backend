import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1686584788875 implements MigrationInterface {
    name = 'Migrations1686584788875'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`rol\` varchar(5) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`rol\``);
    }

}
