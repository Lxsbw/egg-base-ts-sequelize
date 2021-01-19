import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.get('/hello', controller.home.hello);

  router.get('/api/mobile-phone/findall', controller.mobilePhone.findAll);
};
