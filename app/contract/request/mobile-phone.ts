/*
 * @Author: zhixiong.fu
 * @Date: 2021-01-22 01:42:47
 * @Last Modified by: zhixiong.fu
 * @Last Modified time: 2021-01-22 02:27:51
 */

// 添加手机
const MobilePhoneIn = {
  modelName: {
    type: 'string',
    required: true,
    description: '手机型号',
    example: 'xx'
  },
  size: {
    type: 'string',
    required: true,
    description: '尺寸',
    example: '4.7'
  },
  spec: {
    type: 'string',
    required: true,
    description: '规格',
    example: 'blue'
  },
  ram: { type: 'integer', description: '内存', example: 400 },
  rom: { type: 'integer', description: '空间', example: 6400 },
  seriaNumber: { type: 'string', description: '序列号', example: '00010' }
};

// 添加手机
const MobilePhoneOut = {
  id: { type: 'string', description: 'id' }
};

// 更新手机
const MobilePhoneUpdIn = {
  id: {
    type: 'string',
    required: true,
    description: 'id',
    example: 'xx'
  },
  modelName: {
    type: 'string',
    required: true,
    description: '手机型号',
    example: 'xx'
  },
  size: { type: 'string', description: '尺寸', example: '4.7' },
  spec: { type: 'string', description: '规格', example: 'blue' },
  ram: { type: 'integer', description: '内存', example: 800 },
  rom: { type: 'integer', description: '空间', example: 6400 },
  seriaNumber: { type: 'string', description: '序列号', example: '00010' }
};

// 删除手机
const MobilePhoneDel = {
  id: {
    type: 'string',
    required: true,
    description: 'id',
    example: 'xx'
  }
};

export { MobilePhoneIn, MobilePhoneOut, MobilePhoneUpdIn, MobilePhoneDel };
