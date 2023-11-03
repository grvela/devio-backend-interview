import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatingOrders1699037996041 implements MigrationInterface {
    name = 'UpdatingOrders1699037996041'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "paymentType"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "paymentType" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "paymentType"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "paymentType" character varying NOT NULL`);
    }

}
