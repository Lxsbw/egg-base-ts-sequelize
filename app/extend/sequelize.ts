/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-22 00:39:09
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-01-22 00:40:20
 */
import { Application } from 'egg';
import * as _ from 'lodash';

class SequelizeHelper {
  app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  /**
   * attributes处理 属性生成 [下划线，小驼峰]
   *
   * @param {Array|String} columns
   * @returns
   * @memberof SequelizeHelper
   */
  attributes(columns) {
    if (_.isArray(columns)) {
      return _(columns)
        .map((p) => {
          if (_.isString(p)) {
            return [_.snakeCase(p), _.camelCase(p)];
          }
          return p;
        })
        .value();
    } else if (_.isString(columns)) {
      return [_.snakeCase(columns), _.camelCase(columns)];
    }
  }
  /**
   *
   *
   * @param {Array|String} columns
   * @returns
   * @memberof SequelizeHelper
   */
  groupName(columns) {
    if (_.isArray(columns)) {
      return _(columns)
        .map((p) => {
          if (_.isString(p)) {
            return _.snakeCase(p);
          }
          return p;
        })
        .value();
    } else if (_.isString(columns)) {
      return _.snakeCase(columns);
    }
  }
}

module.exports = (app) => new SequelizeHelper(app);
