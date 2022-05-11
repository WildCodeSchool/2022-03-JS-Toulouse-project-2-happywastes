import axios from "axios";

class UserUtils {
  constructor(userMail) {
    this.mail = userMail;
    this.baseApiUrl = "http://localhost:5000/api";
  }

  getInfos() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.baseApiUrl}/users/${this.mail}`)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }

  getFavourites() {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:5000/api/favourites/${this.mail}`)
        .then((data) => {
          return resolve(data.data[0]);
        })
        .catch((error) => reject(error));
    });
  }

  addFavourite(data) {
    return new Promise((resolve, reject) => {
      axios
        .post(`http://localhost:5000/api/favourites/${this.mail}`, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  }

  removeFavourite(favouriteId) {
    return new Promise((resolve, reject) => {
      axios
        .delete(
          `http://localhost:5000/api/favourites/${this.mail}/${favouriteId}`
        )
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  }
}

export default UserUtils;
