import api from './config'

export const getAllRatings = async () => {
  const res = await api.get('./ratings')
  return res.data
}