import { Application } from 'egg';
import { wrapper, makeSwaggerRouter } from 'egg-swagger-decorator';

export default (app: Application) => {
  // const ctx = app.createAnonymousContext();

  // swagger
  const options = {
    // // [optional] default is /swagger-html
    swaggerHtmlEndpoint: '/api-docs/swagger',
    // // [optional] default is /swagger-json
    // swaggerJsonEndpoint: '/sj',
    // // [optional] default is false. if true, will call makeSwaggerRouter(app) automatically
    // makeswaggerRouter: false,

    title: 'Egg TypeScript Swagger',
    version: 'v1.0.0',
    description:
      'This is a sample server Egg server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.'
  };
  wrapper(app, options);
  makeSwaggerRouter(app);

  // 开始前执行
  app.beforeStart(async () => {
    // ctx.logger.info('beforeStart');
    console.log('beforeStart');
  });

  // 准备好执行
  app.ready(async () => {
    console.log('====================================');
    console.log('🚀  Your awesome APP is launching...');
    console.log('====================================');

    console.log('====================================');
    console.log(
      `✅  http://${app.config.cluster.listen.hostname}:${app.config.cluster.listen.port}`
    );
    console.log(
      `✅  http://${app.config.cluster.listen.hostname}:${app.config.cluster.listen.port}/api-docs/swagger`
    );
    console.log('✅  Your awesome APP launched');
    console.log('====================================');
  });

  // 关闭前执行
  app.beforeClose(async () => {
    // ctx.logger.info('beforeClose');
    console.log('beforeClose');
  });
};
