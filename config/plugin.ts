import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
};

plugin.sequelize = {
  package: 'egg-sequelize-ts',
  enable: true
};

export default plugin;
