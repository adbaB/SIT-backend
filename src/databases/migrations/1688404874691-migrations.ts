import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1688404874691 implements MigrationInterface {
    name = 'Migrations1688404874691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP FOREIGN KEY \`FK_b36a14fc8e7c6760a8f90002187\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP COLUMN \`tipo_contribuyente_id\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD \`tipo_contibuyente\` enum ('Persona Natural', 'Persona Natural Comercial', 'Persona Juridica') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sector\` CHANGE \`estado\` \`estado\` tinyint NOT NULL DEFAULT 1`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP COLUMN \`estado\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD \`estado\` enum ('Activo', 'Inactivo', 'Suspendido') NOT NULL DEFAULT 'Activo'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP COLUMN \`estado\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD \`estado\` tinyint NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`sector\` CHANGE \`estado\` \`estado\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP COLUMN \`tipo_contibuyente\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD \`tipo_contribuyente_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD CONSTRAINT \`FK_b36a14fc8e7c6760a8f90002187\` FOREIGN KEY (\`tipo_contribuyente_id\`) REFERENCES \`tipo_contribuyente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
