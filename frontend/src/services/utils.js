export const utilFavourites = {
  parse: (data) => {
    console.warn(data);
    return data.map((el) => {
      return {
        id: 0,
        center_id: el.recordid,
        name: el.fields.nom,
        address: el.fields.adresse,
        city: el.fields.commune,
        zip_code: el.fields.code_postal,
        coords: {
          lat: el.fields.geo_points_2d[0],
          long: el.fields.geo_points_2d[1],
        },
        schedule: { base: el.fields.horaire },
        categories: [0, 1, 2],
      };
    });
  },
};

export default { utilFavourites };
