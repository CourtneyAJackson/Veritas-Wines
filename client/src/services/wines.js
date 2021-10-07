import api from './config'

export const getAllWines = async () => {
  const res = await api.get('./wines')
  return res.data
}