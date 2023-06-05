import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1683474762015 implements MigrationInterface {
    name = 'Migrations1683474762015'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`numero_control\` \`numero_control\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`id_contribuyente\` \`id_contribuyente\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`denominacion\` \`denominacion\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`codigo\` \`codigo\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`referencia\` \`referencia\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`detalle\` \`detalle\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`monto\` \`monto\` decimal(20,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`id_banco\` \`id_banco\` smallint NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`observancion\` \`observancion\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`liquidador\` \`liquidador\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`liquidador_referencia\` \`liquidador_referencia\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`fecha_liquidacion\` \`fecha_liquidacion\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`petro_liquidacion\` \`petro_liquidacion\` decimal(20,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`cajero\` \`cajero\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`st_solven\` \`st_solven\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`hora\` \`hora\` time NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`numero_caja\` \`numero_caja\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`estado\` \`estado\` tinyint NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`estado\` \`estado\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`numero_caja\` \`numero_caja\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`hora\` \`hora\` time NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`st_solven\` \`st_solven\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`cajero\` \`cajero\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`petro_liquidacion\` \`petro_liquidacion\` decimal(20,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`fecha_liquidacion\` \`fecha_liquidacion\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`liquidador_referencia\` \`liquidador_referencia\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`liquidador\` \`liquidador\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`observancion\` \`observancion\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`id_banco\` \`id_banco\` smallint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`monto\` \`monto\` decimal(20,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`detalle\` \`detalle\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`referencia\` \`referencia\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`codigo\` \`codigo\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`denominacion\` \`denominacion\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`id_contribuyente\` \`id_contribuyente\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Recibos\` CHANGE \`numero_control\` \`numero_control\` int NOT NULL`);
    }

}
