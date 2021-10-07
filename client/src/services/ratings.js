import api from './config'

export const getAllRatings = async () => {
  const res = await api.get('./ratings')
  return res.data
}

export const getOneRating = async (id) => {
  const resp = await api.get(`/ratings/${id}`);
  return resp.data;
};

export const postRating = async (ratingData) => {
  const resp = await api.post('/ratings', { rating: ratingData });
  return resp.data;
};

export const deleteRating = async (id) => {
  const resp = await api.delete(`/ratings/${id}`);
  return resp;
};

export const putRating = async (id, ratingData) => {
  const resp = await api.put(`/ratings/${id}`, { rating: ratingData });
  return resp.data;
};

// export const addFlavorToFood = async (flavorId, id) => {
//   const resp = await api.put(`/flavors/${flavorId}/foods/${id}`);
//   return resp.data;
// };
