import http from "../http-common";

class RestaurantDataService {
  //restaurants
  getAll(page = 0) {
    return http.get(`restaurants?page=${page}`);
  }
  get(id) {
    return http.get(`restaurants/${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }
  //review
  createReview(data) {
    return http.post("review-new", data);
  }
  updateReview(data) {
    return http.put("review-edit", data);
  }
  deleteReview(id, userId) {
    return http.delete(`/review-delete?id=${id}`, { data: { userId: userId } });
  }
  //cuisines
  getCuisines() {
    return http.get(`/restaurants/cuisines`);
  }
}

export default new RestaurantDataService();
