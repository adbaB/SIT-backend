import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1687549294857 implements MigrationInterface {
    name = 'Migrations1687549294857'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sector\` CHANGE \`zonaCastastral\` \`zona_catastral\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`parroquia\` ADD UNIQUE INDEX \`IDX_5baf39d2582593d109f5795d77\` (\`descripcion\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`parroquia\` DROP INDEX \`IDX_5baf39d2582593d109f5795d77\``);
        await queryRunner.query(`ALTER TABLE \`contribuyente\` CHANGE \`update_at\` \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`sector\` CHANGE \`zona_catastral\` \`zonaCastastral\` int NOT NULL`);
    }

}
