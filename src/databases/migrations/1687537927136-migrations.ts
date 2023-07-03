import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1687537927136 implements MigrationInterface {
    name = 'Migrations1687537927136'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP FOREIGN KEY \`FK_66632a5b278c1a625e79aee4664\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP FOREIGN KEY \`FK_82fd5a4040991be5e96e21e0f71\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP FOREIGN KEY \`FK_eb1855b441d85138e79b56b3bb0\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP COLUMN \`typeContribuyenteId\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP COLUMN \`parroquiaId\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP COLUMN \`sectorId\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP COLUMN \`tipo_contribuyente_id\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD \`tipo_contribuyente_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP COLUMN \`parroquia_id\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD \`parroquia_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP COLUMN \`sector_id\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD \`sector_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD CONSTRAINT \`FK_b36a14fc8e7c6760a8f90002187\` FOREIGN KEY (\`tipo_contribuyente_id\`) REFERENCES \`tipo_contribuyente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD CONSTRAINT \`FK_670bfe2d86b5d765c3a8d975549\` FOREIGN KEY (\`parroquia_id\`) REFERENCES \`parroquia\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD CONSTRAINT \`FK_54ce737b880e997f65b87fdf762\` FOREIGN KEY (\`sector_id\`) REFERENCES \`sector\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP FOREIGN KEY \`FK_54ce737b880e997f65b87fdf762\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP FOREIGN KEY \`FK_670bfe2d86b5d765c3a8d975549\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP FOREIGN KEY \`FK_b36a14fc8e7c6760a8f90002187\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP COLUMN \`sector_id\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD \`sector_id\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP COLUMN \`parroquia_id\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD \`parroquia_id\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` DROP COLUMN \`tipo_contribuyente_id\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD \`tipo_contribuyente_id\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD \`sectorId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD \`parroquiaId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD \`typeContribuyenteId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD CONSTRAINT \`FK_eb1855b441d85138e79b56b3bb0\` FOREIGN KEY (\`parroquiaId\`) REFERENCES \`parroquia\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD CONSTRAINT \`FK_82fd5a4040991be5e96e21e0f71\` FOREIGN KEY (\`typeContribuyenteId\`) REFERENCES \`tipo_contribuyente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` ADD CONSTRAINT \`FK_66632a5b278c1a625e79aee4664\` FOREIGN KEY (\`sectorId\`) REFERENCES \`sector\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
