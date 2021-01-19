/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-19 00:50:58
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-01-19 22:56:21
 */

// const BaseService = require('../base/base-service');
// const _ = require('lodash');
// const Sequelize = require('sequelize');
import { Service } from 'egg';
// import { CreateOptions } from 'sequelize';
// const Op = Sequelize.Op;

export default class MobilePhoneService extends Service {
  //   get Model() {
  //     return this.ctx.model.MobilePhone;
  //   }

  //   /**
  //    * id查找
  //    */
  //   async find() {
  //     const { ctx } = this;
  //     // 如果where为null则进行初始化
  //     !ctx.mid.where && (ctx.mid.where = {});
  //     ctx.params.id = ctx.query.id;
  //     ctx.mid.where.id = ctx.query.id;
  //     ctx.mid.attributes = ctx.helper.Orm.attributes([
  //       'id',
  //       'modelName',
  //       'size',
  //       'spec',
  //       'ram',
  //       'rom',
  //       'createdAt'
  //     ]);

  //     // const result = await this.findByPk();
  //     const result = await this.findOne({
  //       where: { id: ctx.params.id }
  //     });

  //     return result;
  //   }

  /**
   * 查找
   */
  async findAll() {
    // 从this中导出ctx全局类，如logger、app(helper)、
    // const { ctx } = this;
    // ctx.mid.attributes = ctx.helper.Orm.attributes([
    //   'id',
    //   'modelName',
    //   'size',
    //   'spec',
    //   'ram',
    //   'rom',
    //   'createdAt'
    // ]);
    // // 排序处理
    // ctx.mid.order = [['id', 'desc']];

    // const options = {
    //   where: _.get(ctx, 'mid.where'),
    //   attributes: _.get(ctx, 'mid.attributes', this.Model.rawAttributes),
    //   include: _.get(ctx, 'mid.include'),
    //   order: _.get(ctx, 'mid.order'),
    //   raw: _.get(ctx, 'mid.raw'),
    //   limit: _.toInteger(_.get(ctx, 'mid.limit', 6)),
    //   offset: _.toInteger(_.get(ctx, 'mid.offset', 0))
    // };

    const offset = 0;
    const limit = 10;
    const result = this.ctx.model.MobilePhone.findAndCountAll({
      offset,
      limit,
      order: [
        ['created_at', 'desc'],
        ['id', 'desc']
      ]
    });

    // ctx.mid.raw = true; //拉平信息
    // const result = await this.Model.findAndCountAll(options); // await this.find();

    return result;
  }

  //   /**
  //    * 添加手机
  //    */
  //   async add() {
  //     const { ctx } = this;
  //     // ctx.mid.param.type = 1;
  //     console.log('Service : ' + ctx.mid.param);
  //     const entity = await this.create();

  //     return { id: entity.id };
  //   }

  //   /**
  //    * 更新
  //    */
  //   async modify() {
  //     const { ctx } = this;
  //     const param = ctx.request.body;

  //     !ctx.mid.where && (ctx.mid.where = {});
  //     !ctx.mid.data && (ctx.mid.data = {});
  //     if (param.id) {
  //       ctx.mid.where.id = param.id;
  //     }
  //     if (param.modelName) {
  //       ctx.mid.data.modelName = param.modelName;
  //     }
  //     if (param.size) {
  //       ctx.mid.data.size = param.size;
  //     }
  //     if (param.spec) {
  //       ctx.mid.data.spec = param.spec;
  //     }
  //     if (param.ram) {
  //       ctx.mid.data.ram = _.toInteger(param.ram);
  //     }
  //     if (param.rom) {
  //       ctx.mid.data.rom = _.toInteger(param.rom);
  //     }
  //     if (param.seriaNumber) {
  //       ctx.mid.data.seriaNumber = param.seriaNumber;
  //     }
  //     const result = await this.update();
  //     console.log(result);
  //     return result;
  //   }

  //   /**
  //    * 删除
  //    */
  //   async delete() {
  //     const { ctx } = this;
  //     const param = ctx.request.body;
  //     console.log('ctx : ' + JSON.stringify(ctx));
  //     console.log('ctx.mid : ' + JSON.stringify(ctx.mid));
  //     console.log('ctx.params : ' + JSON.stringify(ctx.params));
  //     console.log('ctx.mid : ' + JSON.stringify(ctx.mid));
  //     !ctx.mid.where && (ctx.mid.where = {});
  //     ctx.mid.where.id = param.id;

  //     console.log('ctx.mid.where : ' + JSON.stringify(ctx.mid.where));

  //     const result = await this.destroy();

  //     console.log('result : ' + result);
  //     return result;
  //   }
}

// module.exports = MobilePhoneService;
