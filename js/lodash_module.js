var _ = require('lodash');
var people = [{
  "id": 1,
  "first_name": "Luke",
  "last_name": "Witz",
  "email": "lwitz0@comcast.net",
  "gender": "Male",
  "ip_address": "21.168.221.76"
}, {
  "id": 2,
  "first_name": "Bartholomeo",
  "last_name": "Varns",
  "email": "bvarns1@tinypic.com",
  "gender": "Male",
  "ip_address": "102.239.197.131"
}, {
  "id": 3,
  "first_name": "Angele",
  "last_name": "Playden",
  "email": "aplayden2@sohu.com",
  "gender": "Female",
  "ip_address": "2.32.66.21"
}, {
  "id": 4,
  "first_name": "Alejandra",
  "last_name": "Coltart",
  "email": "acoltart3@msu.edu",
  "gender": "Female",
  "ip_address": "143.48.220.240"
}, {
  "id": 5,
  "first_name": "Amalie",
  "last_name": "Dolbey",
  "email": "adolbey4@google.it",
  "gender": "Female",
  "ip_address": "160.34.214.246"
}, {
  "id": 6,
  "first_name": "Jessamyn",
  "last_name": "Bondar",
  "email": "jbondar5@baidu.com",
  "gender": "Female",
  "ip_address": "201.139.148.68"
}, {
  "id": 7,
  "first_name": "William",
  "last_name": "Ilewicz",
  "email": "wilewicz6@tamu.edu",
  "gender": "Male",
  "ip_address": "196.47.119.225"
}, {
  "id": 8,
  "first_name": "Idell",
  "last_name": "Tancock",
  "email": "itancock7@digg.com",
  "gender": "Female",
  "ip_address": "48.212.41.114"
}, {
  "id": 9,
  "first_name": "Valle",
  "last_name": "Tomasello",
  "email": "vtomasello8@netscape.com",
  "gender": "Male",
  "ip_address": "125.179.41.74"
}, {
  "id": 10,
  "first_name": "Jenn",
  "last_name": "Mauro",
  "email": "jmauro9@lycos.com",
  "gender": "Female",
  "ip_address": "250.87.8.154"
}];

var femalePpl = _.filter(people, {gender: "Female"}).length;

alert("# of Females - "+femalePpl);

