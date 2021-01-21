/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-19 00:50:58
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-01-22 02:26:46
 */

// const BaseService = require('../base/base-service');
import { Service } from 'egg';
import {
  Op,
  FindAndCountOptions,
  UpdateOptions,
  DestroyOptions
} from 'sequelize';
import * as _ from 'lodash';

export default class MobilePhoneService extends Service {
  /**
   * id查找
   */
  async find() {
    const { ctx } = this;
    // 如果where为null则进行初始化
    !ctx.mid.where && (ctx.mid.where = {});
    ctx.params.id = ctx.query.id;
    ctx.mid.where.id = ctx.query.id;

    // console.log('ctx.query.id : ', ctx.query.id);

    const options: FindAndCountOptions = {
      attributes: [
        'id',
        'modelName',
        'size',
        'spec',
        'ram',
        'rom',
        'createdAt'
      ],
      where: ctx.mid.where
    };

    // const result = await this.findByPk();
    const result = await this.ctx.model.MobilePhone.findOne(options);

    return result;
  }

  /**
   * 查找
   */
  async findAll() {
    // 从this中导出ctx全局类，如logger、app(helper)、
    const { ctx } = this;

    if (ctx.query.id) {
      ctx.mid.where.id = ctx.query.id;
    }
    if (ctx.query.modelName) {
      ctx.mid.where = {
        ...ctx.mid.where,
        modelName: { [Op.like]: `%${ctx.query.modelName}%` }
      };
    }

    const options: FindAndCountOptions = {
      attributes: [
        'id',
        'modelName',
        'size',
        'spec',
        'ram',
        'rom',
        'createdAt'
      ],
      where: _.get(ctx, 'mid.where'),
      offset: ctx.query.offset,
      limit: ctx.query.limit,
      order: [
        ['created_at', 'desc'],
        ['id', 'desc']
      ]
    };

    const result = await this.ctx.model.MobilePhone.findAndCountAll(options);
    return result;
  }

  /**
   * 添加手机
   */
  async add() {
    const { ctx } = this;
    // ctx.mid.param.type = 1;
    console.log('Service : ' + ctx.mid.param);
    const entity = await this.ctx.model.MobilePhone.create(ctx.mid.param);

    return { id: entity.id };
  }

  /**
   * 更新
   */
  async modify() {
    const { ctx } = this;
    const param = ctx.request.body;

    !ctx.mid.where && (ctx.mid.where = {});
    !ctx.mid.data && (ctx.mid.data = {});
    if (param.id) {
      ctx.mid.where.id = param.id;
    }
    if (param.modelName) {
      ctx.mid.data.modelName = param.modelName;
    }
    if (param.size) {
      ctx.mid.data.size = param.size;
    }
    if (param.spec) {
      ctx.mid.data.spec = param.spec;
    }
    if (param.ram) {
      ctx.mid.data.ram = _.toInteger(param.ram);
    }
    if (param.rom) {
      ctx.mid.data.rom = _.toInteger(param.rom);
    }
    if (param.seriaNumber) {
      ctx.mid.data.seriaNumber = param.seriaNumber;
    }

    const data = _.get(ctx, 'mid.data');
    const options: UpdateOptions = { where: _.get(ctx, 'mid.where') };

    const result = await this.ctx.model.MobilePhone.update(data, options);
    console.log(result);
    return result;
  }

  /**
   * 删除
   */
  async delete() {
    const { ctx } = this;
    const param = ctx.request.body;
    !ctx.mid.where && (ctx.mid.where = {});
    ctx.mid.where.id = param.id;

    console.log('ctx.mid.where : ' + JSON.stringify(ctx.mid.where));

    const options: DestroyOptions = { where: _.get(ctx, 'mid.where') };

    const result = await this.ctx.model.MobilePhone.destroy(options);

    console.log('result : ' + result);
    return result;
  }
}
