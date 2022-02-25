import { api } from './apiConfig.js'

export const getAllSneakers = async () => {
  const resp = await api.get('/sneakers')
  return resp.data
}

export const getOneSneaker = async (sneaker_id) => {
  const resp = await api.get(`/sneakers/${sneaker_id}`)
  return resp.data
}

export const createSneaker = async (sneakerData) => {
  const resp = await api.post('/sneakers', { sneaker: sneakerData })
  return resp.data
}

export const updateSneaker = async (sneaker_id, sneakerData) => {
  const resp = await api.put(`/sneakers/${sneaker_id}`, { sneaker: sneakerData })
  return resp.data
}

export const deleteSneaker = async (sneaker_id) => {
  const resp = await api.delete(`/sneakers/${sneaker_id}`)
  return resp.data
}