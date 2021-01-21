/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-22 00:22:22
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-01-22 00:58:37
 */

import * as _ from 'lodash';
/**
 * get 参数获取
 *
 * @param {*} ctx 上下文
 */
function getParam(ctx) {
  ctx.mid = {
    where: {}
  };
  ctx.query.offset && (ctx.mid.offset = ctx.query.offset);
  ctx.query.limit && (ctx.mid.limit = ctx.query.limit);
  const condition = _.get(
    ctx.condition,
    ctx.helper.routerToName(ctx.request.path)
  );
  if (!condition) {
    return;
  }
  _.keys(ctx.query)
    .filter(
      (p) =>
        p !== 'offset' && p !== 'limit' && p !== 'order' && _.get(condition, p)
    )
    .forEach((p) => {
      const item = _.get(condition, p);
      const whereValue = item(_.get(ctx.query, p));
      _.get(whereValue, 'key')
        ? _.set(ctx.mid.where, whereValue.key, whereValue.value)
        : (ctx.mid.where = { ...ctx.mid.where, ...whereValue });
    });
}

/**
 *
 *
 * @param {*} ctx 上下文
 */
function postParam(ctx) {
  const param = { ...ctx.params, ...ctx.request.body };
  param.include && (param.include = createInclude(ctx, param.include));
  ctx.mid = {
    param
  };
}

function createInclude(ctx, include) {
  return _(include)
    .map((p) => {
      if (_.isString(p)) return ctx.model[p];
      return {
        model: ctx.model[p.model],
        as: p.as
      };
    })
    .value();
}

module.exports = () => {
  return async function paramData(ctx, next) {
    ctx.method === 'GET' && getParam(ctx);
    (ctx.method === 'POST' ||
      ctx.method === 'PUT' ||
      ctx.method === 'DELETE') &&
      postParam(ctx);
    await next();
  };
};
