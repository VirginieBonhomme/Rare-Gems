import { api } from './apiConfig.js'

export const getProductReviews = async (sneaker_id) => {
  const resp = await api.get(`/sneakers/${sneaker_id}/reviews`)
  return resp.data
}

export const createReview = async (sneaker_id, reviewData) => {
  const resp = await api.post(`/sneakers/${sneaker_id}/reviews`, { review: reviewData })
  return resp.data
}

export const updateReview = async (sneaker_id, review_id, reviewData) => {
  const resp = await api.put(`/sneakers/${sneaker_id}/reviews/${review_id}`, { review: reviewData })
  return resp.data
}

export const deleteReview = async (sneaker_id, review_id) => {
  const resp = await api.delete(`/sneakers/${sneaker_id}/reviews/${review_id}`)
  return resp.data
}