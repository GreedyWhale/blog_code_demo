/*
 * @Description: 连接数据库入口
 * @Author: MADAO
 * @Date: 2021-02-24 15:01:48
 * @LastEditors: MADAO
 * @LastEditTime: 2021-02-25 10:52:48
 */
import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection().then(async connection => {

    console.log("成功连接development");
    connection.close()

}).catch(error => console.log(error));
