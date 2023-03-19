import request from '../utils/request/request';

export const queryLook = (params: object) =>
  request('/service-provide/mini/info/queryLook', params);
