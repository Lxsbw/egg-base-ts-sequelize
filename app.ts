import { Application } from 'egg';

export default (app: Application) => {
  // const ctx = app.createAnonymousContext();

  // 开始前执行
  app.beforeStart(async () => {
    // ctx.logger.info('beforeStart');
    console.log('beforeStart');
  });

  // 准备好执行
  app.ready(async () => {
    // ctx.logger.info('=====service start succeed=====');
    console.log('=====service start succeed=====');
  });

  // 关闭前执行
  app.beforeClose(async () => {
    // ctx.logger.info('beforeClose');
    console.log('beforeClose');
  });
};
