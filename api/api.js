import request from '@/untils/request';

export const urls = {
  apiLoginPost: '/login',
}

export const apiLoginPost = (data) => {
  let config = {
    url: urls.apiLoginPost,
    method: 'POST',
    data: data
  };

  return request(config);
}

