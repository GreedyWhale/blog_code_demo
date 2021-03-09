/*
 * @Description: 连接数据库入口
 * @Author: MADAO
 * @Date: 2021-02-24 15:01:48
 * @LastEditors: MADAO
 * @LastEditTime: 2021-02-26 17:08:01
 */
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from './entity/User'

createConnection().then(async connection => {
    // manager
    // const users = await connection.manager.find(User)
    // console.log(users)
    // const usersEntity = new User()
    // usersEntity.name = 'allen'
    // usersEntity.age = 20
    // usersEntity.address = 'BeiJing'
    // await connection.manager.save(usersEntity)
    // const newUsers = await connection.manager.find(User)
    // console.log(newUsers)
    // connection.close()
    const usersRepository = connection.getRepository(User)
    const users = await usersRepository.find()
    if (!users.length) {
        const data = Array.from({ length: 10 }).map((v, i) => {
            return new User({
                name: `robot-${i}`,
                age: parseInt((Math.random() * 99 + 1) as unknown as string, 10),
                address: `district-${i}`
            })
        })
        await usersRepository.save(data)
    }
    connection.close()
}).catch(error => console.log(error));
