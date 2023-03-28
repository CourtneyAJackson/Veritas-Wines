import api from './config'

export const getAllWines = async () => {
  const res = await api.get('/wines')
  return res.data
}

export const getOneWine = async (id) => {
  const resp = await api.get(`/wines/${id}`);
  return resp.data;
};

analytics.track({
  userId:'f4ca124298',
  event: 'Bookmarked Article',
  properties: {
    title: 'Snow Fall',
    subtitle: 'The Avalanche at Tunnel Creek',
    author: 'John Branch'
  }
});