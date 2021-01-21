/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-18 23:42:50
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-01-22 02:14:05
 */

import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  CreatedAt,
  UpdatedAt,
  DeletedAt
} from 'sequelize-typescript';
import * as _ from 'lodash';
// import { FlakeId } from 'flake-idgen';
// import { intformat } from 'biguint-format';
import FlakeId = require('flake-idgen');
import intformat = require('biguint-format');
const flakeIdgen = new FlakeId({ epoch: 1300000000000 });

@Table({
  tableName: 'mobile_phone'
  // timestamps: false,
  // freezeTableName: true
})
export class MobilePhone extends Model<MobilePhone> {
  @PrimaryKey
  // @AutoIncrement
  @Column({
    type: DataType.STRING(50),
    comment: 'key',
    autoIncrement: false,
    defaultValue: () => _.toString(intformat(flakeIdgen.next(), 'dec'))
  })
  id: string;

  @Column({
    type: DataType.STRING(50),
    comment: '型号'
  })
  modelName: string;

  @Column({
    type: DataType.STRING(50),
    comment: '尺寸'
  })
  size: string;

  @Column({
    type: DataType.STRING(50),
    comment: '规格'
  })
  spec: string;

  @Column({
    // type: DataType.INTEGER(11),
    comment: '内存'
  })
  ram: number;

  @Column({
    // type: DataType.INTEGER(11),
    comment: '空间'
  })
  rom: number;

  @Column({
    type: DataType.STRING(50),
    comment: '序列号'
  })
  seriaNumber: string;

  // 创建时间
  @CreatedAt
  @Column
  createdAt: Date;
  // 更新时间
  @UpdatedAt
  @Column
  updatedAt: Date;
  // 删除时间
  @DeletedAt
  @Column
  deletedAt: Date;
}

export default () => MobilePhone;
