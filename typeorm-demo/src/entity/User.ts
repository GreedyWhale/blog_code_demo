/*
 * @Description: users实体
 * @Author: MADAO
 * @Date: 2021-02-26 15:07:02
 * @LastEditors: MADAO
 * @LastEditTime: 2021-02-26 17:06:30
 */
import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('text')
  name: string;
  @Column('smallint')
  age: number;
  @Column('text')
  address: string;

  constructor(user: Partial<User>) {
    user && Object.assign(this, user)
  }
}
