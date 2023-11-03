import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductTable1698983631573 implements MigrationInterface {
    name = 'ProductTable1698983631573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "code" integer NOT NULL, "tag" character varying NOT NULL, "title" character varying NOT NULL, "short_description" character varying NOT NULL, "long_description" text NOT NULL, "value" double precision NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
