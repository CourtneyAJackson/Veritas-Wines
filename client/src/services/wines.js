import api from './config'

export const getAllWines = async () => {
  const res = await api.get('/wines')
  return res.data
}

export const getOneWine = async (id) => {
  const resp = await api.get(`/wines/${id}`);
  return resp.data;
};