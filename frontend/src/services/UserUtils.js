import axios from "axios";

class UserUtils {
  constructor(userID) {
    this.id = userID;
    this.favourites = this.getFavourites();
    this.baseApiUrl = "http://localhost:5000/api";
  }

  getInfos() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.baseApiUrl}/users/${this.id}`)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }

  getFavourites() {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:5000/api/favourites/${this.id}`)
        .then((data) => {
          
          // const favourites = data.data.map((el) => JSON.parse(el.favourites));
          return resolve(data.data[0]);
        })
        .catch((error) => reject(error));
    });
  }

  addFavourite(data) {
    axios
      .post(`http://localhost:5000/api/favourites/${this.id}`, data)
      .then((response) => {
        // [this.favourites] = response.data;
        console.log(response.data);
      });
  }
}

export default UserUtils;
