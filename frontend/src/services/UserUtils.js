import axios from "axios";

const UserUtils = {
  getInfos: (userID) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`http://localhost:5000/api/users/${userID}`)
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  },
};

export default UserUtils;
