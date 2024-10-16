const MyError = require("../model/error");

let USER_LOCATIONS = [
  {
    id: "loc1",
    title: "Red Fort",
    desc: "The Red Fort or Lal Qila (Hindustani: [lal qila]) is a historic fort in the Old Delhi neighbourhood of Delhi, India, ",
    pic: "https://assets-news.housing.com/news/wp-content/uploads/2021/07/20184714/All-about-the-Delhi-Red-Fort-or-Lal-Kila-FB-1200x700-compressed-2-686x400.jpg",
    address: "W82F+4C, Adarsh Meena Colony, Dausa, Rajasthan 303303",
    userid: "u1",
  },
  {
    id: "loc2",
    title: "Taj Mahal",
    desc: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra",
    pic: "https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg",
    address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
    userid: "u1",
  },
  {
    id: "loc3",
    title: "Jatayu Park",
    desc: "Jatayu Earth Center, is a park and tourism centre at Chadayamangalam in Kollam district of Kerala, India",
    pic: "https://akm-img-a-in.tosshub.com/indiatoday/jatayustory-647_112817060030.jpg",
    address:
      "Jatayu Nature Park Rd, Jatayu Junction, Chadayamangalam, Kerala 691534",
    userid: "u2",
  },
];

exports.getLocationByLocId = (req, res, next) => {
  const locid = req.params.locid; // get locid from the url
  const location = USER_LOCATIONS.find((loc) => {
    return loc.id === locid;
  });
  if (!location) {
    return next(new MyError("Cannot find location of this locid", 404));
  }

  res.status(200).json({ result: "success", message: locations });
};

exports.getLocationByUserId = (req, res, next) => {
  const uid = req.params.uid; //get uid from the url
  const locations = USER_LOCATIONS.filter((loc) => {
    return loc.userid === uid;
  });
  if (!locations) {
    return next(new MyError("Cannot find location for this userid", 404));
  }
  res.status(200).json({ result: "success", message: locations });
};

exports.createNewLocation = (req, res, next) => {
  const { title, desc, address, userid } = req.body;
  const newlocation = { title, desc, address, userid };
  USER_LOCATIONS.push(newlocation);

  res.status(201).json({ result: "success", message: newlocation });
};

exports.deleteLocation = (req, res, next) => {
  const locid = req.params.locid; // get locid from the url
  USER_LOCATIONS = USER_LOCATIONS.filter((loc) => {
    loc.id !== locid;
  });
  res.status(200).json({ result: "success", message: "location deleted" });
};