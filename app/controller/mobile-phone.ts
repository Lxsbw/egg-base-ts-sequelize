/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-19 00:56:05
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-01-19 01:04:15
 */

// const RestfulBaseController = require('../base/base-controller');
import { Controller } from 'egg';

/**
 * @Controller 手机信息管理
 */
export default class MobilePhoneController extends Controller {
  /**
   * @summary id查找
   * @description id查找
   * @router get /api/mobile-phone/find
   * @request query string *id id
   * @response 200
   */
  async findOne() {
    // const { ctx } = this;
    // ctx.body = await ctx.service.mobilePhone.find();
  }

  /**
   * @summary 查找
   * @description 查找
   * @router get /api/mobile-phone/findall
   * @request query integer *offset 页码
   * @request query integer *limit 每页条数
   * @request query string id id
   * @request query string modelName 型号
   * @response 200
   */
  async findAll() {
    const { ctx } = this;
    ctx.body = await ctx.service.mobilePhone.findAll();
  }

  /**
   * @summary 添加手机
   * @description
   * @router post /api/mobile-phone/create
   * @request body MobilePhone.MobilePhoneIn
   * @response 200 MobilePhone.MobilePhoneOut
   */
  async create() {
    // const { ctx } = this;
    // ctx.body = await ctx.service.mobilePhone.add();
  }

  /**
   * @summary 更新手机
   * @description
   * @router put /api/mobile-phone/update
   * @request body MobilePhone.MobilePhoneUpdIn
   * @response 200
   */
  async update() {
    // const { ctx } = this;
    // ctx.body = await ctx.service.mobilePhone.modify();
  }

  /**
   * @summary 删除手机
   * @description
   * @router delete /api/mobile-phone/delete
   * @request body MobilePhone.MobilePhoneDel
   * @response 200
   */
  async delete() {
    // const { ctx } = this;
    // ctx.body = await ctx.service.mobilePhone.delete();
  }
}

module.exports = MobilePhoneController;
