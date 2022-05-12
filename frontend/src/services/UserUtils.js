import axios from "axios";

class UserUtils {
  constructor(userMail) {
    this.mail = userMail;
    this.baseApiUrl = import.meta.env.VITE_BACKEND_URL;
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
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/favourites/${this.mail}`)
        .then((data) => {
          return resolve(data.data[0]);
        })
        .catch((error) => reject(error));
    });
  }

  addFavourite(data) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/favourites/${this.mail}`,
          data
        )
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
          `${import.meta.env.VITE_BACKEND_URL}/api/favourites/${
            this.mail
          }/${favouriteId}`
        )
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => reject(error));
    });
  }
}

export default UserUtils;
