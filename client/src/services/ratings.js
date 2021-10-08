import api from './config'

export const getAllRatings = async () => {
  const res = await api.get('./ratings')
  return res.data
}

export const getOneRating = async (id) => {
  const resp = await api.get(`/ratings/${id}`);
  return resp.data;
};

export const postRating = async (ratingData, id) => {
  console.log("from services",ratingData)
  const resp = await api.post(`/wines/${id}/ratings`, { rating: ratingData });
  return resp.data;
};

export const deleteRating = async (id) => {
  const resp = await api.delete(`/ratings/${id}`);
  return resp;
};

export const putRating = async (ratingData, id) => {
  const resp = await api.put(`/ratings/${id}`, { rating: ratingData });
  return resp.data;
};

// export const addRatingToWine = async (ratingId, id) => {
//   const resp = await api.put(`/ratings/${ratingId}/wines/${id}`);
//   return resp.data;
// };
