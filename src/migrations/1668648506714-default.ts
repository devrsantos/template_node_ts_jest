import { MigrationInterface, QueryRunner } from 'typeorm'

export class default1668648506714 implements MigrationInterface {
  name = 'default1668648506714'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "adresses" ("id" SERIAL NOT NULL, "street" text NOT NULL, "city" text NOT NULL, "user_id" integer, CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "age" text NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))')
    await queryRunner.query('ALTER TABLE "adresses" ADD CONSTRAINT "FK_8549d17ae3508635410b4fa4fb1" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "adresses" DROP CONSTRAINT "FK_8549d17ae3508635410b4fa4fb1"')
    await queryRunner.query('DROP TABLE "users"')
    await queryRunner.query('DROP TABLE "adresses"')
  }
}
