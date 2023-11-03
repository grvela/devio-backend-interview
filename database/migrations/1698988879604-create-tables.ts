import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1698988879604 implements MigrationInterface {
    name = 'CreateTables1698988879604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "options" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "value" double precision NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_d232045bdb5c14d932fba18d957" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "code" integer NOT NULL, "tag" character varying NOT NULL, "title" character varying NOT NULL, "short_description" character varying NOT NULL, "long_description" text NOT NULL, "value" double precision NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "amount" integer NOT NULL, "notes" character varying NOT NULL, "paymentType" character varying NOT NULL, "totalPrice" double precision NOT NULL, "productId" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "option_id" ("ordersId" integer NOT NULL, "optionsId" integer NOT NULL, CONSTRAINT "PK_c42c91b6d277d3f8513920bf7c2" PRIMARY KEY ("ordersId", "optionsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_05e470a2991fb1c44cbcdb1990" ON "option_id" ("ordersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2e998001a52d14e61d3f1ed600" ON "option_id" ("optionsId") `);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_8624dad595ae567818ad9983b33" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "option_id" ADD CONSTRAINT "FK_05e470a2991fb1c44cbcdb1990c" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "option_id" ADD CONSTRAINT "FK_2e998001a52d14e61d3f1ed600e" FOREIGN KEY ("optionsId") REFERENCES "options"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "option_id" DROP CONSTRAINT "FK_2e998001a52d14e61d3f1ed600e"`);
        await queryRunner.query(`ALTER TABLE "option_id" DROP CONSTRAINT "FK_05e470a2991fb1c44cbcdb1990c"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_8624dad595ae567818ad9983b33"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2e998001a52d14e61d3f1ed600"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_05e470a2991fb1c44cbcdb1990"`);
        await queryRunner.query(`DROP TABLE "option_id"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "options"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
