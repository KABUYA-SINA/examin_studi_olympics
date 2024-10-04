const products = [
  {
    "_id": "107fb5b75607497b96722bda5b504926",
    "title": "Solo",
    "price": 50,
    "imageUrl": "solo.jpg",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "altTxt": "Photo d'un ticket une place",
    "icon": "person"
  },
  {
    "_id": "415b7cacb65d43b2b5c1ff70f3393ad1",
    "title": "Dou",
    "price": 70,
    "imageUrl": "people.jpg",
    "description": "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.",
    "altTxt": "Photo d'un ticket deux places",
    "icon": "people"
  },
  {
    "_id": "055743915a544fde83cfdfc904935ee7",
    "title": "familly",
    "price": 90,
    "imageUrl": "familly.jpg",
    "description": "Pellentesque fermentum arcu venenatis ex sagittis accumsan. Vivamus lacinia fermentum tortor.Mauris imperdiet tellus ante.",
    "altTxt": "Photo d'un ticket famille",
    "icon": "family"
  }
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(products))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(products)).find(product =>
      product._id == id)
    )
  );
}




