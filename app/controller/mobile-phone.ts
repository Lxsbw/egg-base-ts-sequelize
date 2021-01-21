/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-19 00:56:05
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-01-22 02:30:18
 */

// const RestfulBaseController = require('../base/base-controller');
import { Controller } from 'egg';
import {
  request,
  responses,
  tags,
  summary,
  description,
  query,
  // path,
  body
} from 'egg-swagger-decorator';
import {
  MobilePhoneIn,
  // MobilePhoneOut,
  MobilePhoneUpdIn,
  MobilePhoneDel
} from '../contract/request/mobile-phone';

const mobilePhoneTag = tags(['MobilePhone']);

/**
 * 手机信息管理
 */
export default class MobilePhoneController extends Controller {
  @summary('id查找')
  @description('id查找')
  @request('get', '/api/mobile-phone/find')
  @mobilePhoneTag
  @query({ id: { type: 'string', required: true, description: 'id' } })
  @responses({ 200: { description: 'success' }, 400: { description: 'error' } })
  async findOne() {
    const { ctx } = this;
    ctx.body = await ctx.service.mobilePhone.find();
  }

  @summary('查找')
  @description('查找')
  @request('get', '/api/mobile-phone/findall')
  @mobilePhoneTag
  @query({
    offset: { type: 'number', required: true, default: 0, description: '页码' },
    limit: {
      type: 'number',
      required: true,
      default: 10,
      description: '每页条数'
    },
    id: { type: 'string', description: 'id' },
    modelName: { type: 'string', description: '型号' }
  })
  @responses({ 200: { description: 'success' }, 400: { description: 'error' } })
  async findAll() {
    const { ctx } = this;
    ctx.body = await ctx.service.mobilePhone.findAll();
  }

  @summary('添加手机')
  @description('添加手机')
  @request('post', '/api/mobile-phone/create')
  @mobilePhoneTag
  @body(MobilePhoneIn)
  @responses({ 200: { description: 'success' }, 400: { description: 'error' } })
  async create() {
    const { ctx } = this;
    ctx.body = await ctx.service.mobilePhone.add();
  }

  @summary('更新手机')
  @description('更新手机')
  @request('put', '/api/mobile-phone/update')
  @mobilePhoneTag
  @body(MobilePhoneUpdIn)
  @responses({ 200: { description: 'success' }, 400: { description: 'error' } })
  async update() {
    const { ctx } = this;
    ctx.body = await ctx.service.mobilePhone.modify();
  }

  @summary('删除手机')
  @description('删除手机')
  @request('delete', '/api/mobile-phone/delete')
  @mobilePhoneTag
  @body(MobilePhoneDel)
  @responses({ 200: { description: 'success' }, 400: { description: 'error' } })
  async delete() {
    const { ctx } = this;
    ctx.body = await ctx.service.mobilePhone.delete();
  }
}

module.exports = MobilePhoneController;
