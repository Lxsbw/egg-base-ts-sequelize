// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportParamData from '../../../app/middleware/param-data';

declare module 'egg' {
  interface IMiddleware {
    paramData: typeof ExportParamData;
  }
}
