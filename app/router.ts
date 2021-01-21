import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.get('/hello', controller.home.hello);

  //   router.get('/api/mobile-phone/findall', controller.mobilePhone.findAll);

  router.get('/api/mobile-phone/find', controller.mobilePhone.findOne);
  router.get('/api/mobile-phone/findall', controller.mobilePhone.findAll);
  router.post('/api/mobile-phone/create', controller.mobilePhone.create);
  router.put('/api/mobile-phone/update', controller.mobilePhone.update);
  router.delete('/api/mobile-phone/delete', controller.mobilePhone.delete);
};
