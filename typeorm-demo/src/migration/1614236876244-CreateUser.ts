/*
 * @Description: users表创建逻辑
 * @Author: MADAO
 * @Date: 2021-02-25 15:07:56
 * @LastEditors: MADAO
 * @LastEditTime: 2021-02-25 17:09:19
 */
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1614236876244 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        { name: 'id', isGenerated: true, generationStrategy: 'increment', type: 'bigint', isPrimary: true },
        { name: 'name', type: 'text' },
        { name: 'age', type: 'smallint' },
        { name: 'address', type: 'text' }
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropTable('users', true)
  }

}
