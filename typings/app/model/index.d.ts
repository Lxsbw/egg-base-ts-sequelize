// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMobilePhone from '../../../app/model/mobile-phone';

declare module 'egg' {
  interface IModel {
    MobilePhone: ReturnType<typeof ExportMobilePhone>;
  }
}
