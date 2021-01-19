/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-18 23:42:50
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-01-19 23:47:58
 */

import { Application } from 'egg';
// import { DataTypes } from 'sequelize';

export default (app: Application) => {
  //   const DataTypes: DataTypes = app.Sequelize.DataTypes;

  const { STRING, DATE, INTEGER } = app.Sequelize;

  const MobilePhone = app.model.define(
    'mobilePhone',
    {
      // key
      id: {
        type: STRING(50),
        primaryKey: true
        // defaultValue: () => intformat(flakeIdGen.next(), 'dec')
      },
      // 型号
      modelName: STRING(50),
      // 尺寸
      size: STRING(50),
      // 规格
      spec: STRING(50),
      // 内存
      ram: INTEGER,
      // 空间
      rom: INTEGER,
      // 序列号
      seriaNumber: STRING(50),
      // 创建时间
      createdAt: DATE,
      // 更新时间
      updatedAt: DATE,
      // 删除时间
      deletedAt: DATE
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: 'mobile_phone',
      underscored: true,
      paranoid: true
      // createdAt: '',
      // updatedAt: '',
      // deletedAt: 'undefined',
    }
  );

  //   return MobilePhoneDo;

  return class extends MobilePhone {};
};
