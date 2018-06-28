import { fetchData } from '../../TravelMeLibrary/utils/fetch';

export const getUser = (body: any) => {
  let queryStr = '/user/login';
  return fetchData(queryStr, 'POST', body)
}
