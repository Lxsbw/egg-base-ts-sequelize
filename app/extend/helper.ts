/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-22 00:37:49
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-01-22 00:47:20
 */

const fs = require('fs');
const crypto = require('crypto');
import * as _ from 'lodash';
import * as JSEncrypt from 'node-jsencrypt';

const prikey2 = fs
  .readFileSync('config/keys/rsa_1024_priv.pem', 'utf8')
  .toString(); // 私有key给客户端【需要 pem 编码的key】server.pem
const pubkey2 = fs
  .readFileSync('config/keys/rsa_1024_pub.pem', 'utf8')
  .toString(); // 公有key服务器存储【需要 pem 编码的key】cert.pem

// const JSEncrypt = require('node-jsencrypt');
const encrypt = new JSEncrypt();
encrypt.setPublicKey(pubkey2);
const decrypt = new JSEncrypt();
decrypt.setPrivateKey(prikey2);

module.exports = {
  //   get ApiWeiXin() {
  //     return require('./api-weixin')(this);
  //   },
  // md5 加密
  md5encryption: (data) => {
    const md5 = crypto.createHash('md5');
    return md5.update(data).digest('hex');
  },
  // 加密
  encryption: (data) => {
    return encrypt.encrypt(data);
  },
  // 解密
  decrypt: (encrypted) => {
    return decrypt.decrypt(encrypted);
  },
  // 签名
  signRSA: (data) => {
    const sign = crypto.createSign('RSA-SHA1'); // 创建签名算法
    sign.update(Buffer.from(data, 'utf-8'));
    return sign.sign(prikey2, 'base64'); // 得到签名
  },
  // 验签（boolean）
  verifyRSA: (data, sig) => {
    const verify = crypto.createVerify('RSA-SHA1');
    verify.update(Buffer.from(data, 'utf-8'));
    return verify.verify(pubkey2, sig, 'base64');
  },
  get Orm() {
    return require('./sequelize')(this);
  },
  routerToName(path) {
    // fileCamename.actionName
    let name = path
      .split('/')
      .filter((p) => p)
      .map((p) => _.camelCase(p))
      .join('.')
      .toString();
    _.findIndex(name, '.') <= 0 && (name += '.index');
    return name;
  }
};
