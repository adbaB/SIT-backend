import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1688756520313 implements MigrationInterface {
    name = 'Migrations1688756520313'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`contribuyente\` CHANGE \`tipo_contibuyente\` \`tipo_contibuyente\` enum ('persona natural', 'persona natural comercial', 'persona juridica') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` CHANGE \`tipo_contibuyente\` \`tipo_contibuyente\` enum ('Persona Natural', 'Persona Natural Comercial', 'Persona Juridica') NOT NULL`);
    }

}
