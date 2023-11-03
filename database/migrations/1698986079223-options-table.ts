import { MigrationInterface, QueryRunner } from "typeorm";

export class OptionsTable1698986079223 implements MigrationInterface {
    name = 'OptionsTable1698986079223'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "code" integer NOT NULL, "tag" character varying NOT NULL, "title" character varying NOT NULL, "short_description" character varying NOT NULL, "long_description" text NOT NULL, "value" double precision NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "options" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "value" double precision NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_d232045bdb5c14d932fba18d957" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "options"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
