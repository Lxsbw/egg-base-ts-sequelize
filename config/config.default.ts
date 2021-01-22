import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1610976957944_2840';

  config.sequelize = {
    dialect: 'mysql',
    host: '121.37.188.31',
    port: 6606,
    database: 'egg_test',
    username: 'root',
    password: 'Admin@123',
    dialectOptions: {
      useUTC: false, // for reading from database
      dateStrings: true,
      typeCast(field, next) {
        // for reading from database
        if (field.type === 'DATETIME') {
          return field.string();
        }
        return next();
      }
    },
    timezone: '+08:00'
  };

  // add your egg config in here
  config.middleware = ['paramData'];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
