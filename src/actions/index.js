import { APICall } from '../apiMiddleware';

export const submitTest = () => ({
  type: 'TEST',
});

export const search = () => ({
  type: 'DEFAULT_SEARCH',
  [APICall]: {
    url: 'http://private-272859-offstage.apiary-mock.com/search',
    method: 'GET',
  },
});

// fetch('http://private-272859-offstage.apiary-mock.com/search')
// .then((data) => data.json().then((djs) => console.log(djs)));
