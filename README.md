# P2
This is a personal project about the  weather app.


<img width="653" alt="image" src="https://user-images.githubusercontent.com/78600296/193981534-13b9d279-fd1c-4f63-a3a0-aac7c7c935db.png">

Back-end use nodeJS.
npm install
npm run dev

Front-end use React. 
npm install
npm start

Mock city list data using json server;
1.Install JSON Server
npm install json-server
2.Create a db.json file with some data;
get an OpenWeatherMap API Key and City ID:https://www.dmopress.com/openweathermap-howto/
{
  "cities": [
	{ "id": 2147714, "name": "Sydney"},
	{ "id": 2063523, "name": "Perth"},
	{ "id": 2174003, "name": "Brisbane"},
	{ "id": 2158177, "name": "Melbourne"},
	{ "id": 2078025, "name": "Adelaide"},
	{ "id": 2165087, "name": "Gold Coast"},
	{ "id": 2155472, "name": "Newcastle"},
	{ "id": 2172517, "name": "Canberra"},
	{ "id": 7839353, "name": "Central Coast"},
	{ "id": 2171507, "name": "Wollongong"},
	{ "id": 2163355, "name": "Hobart"},
	{ "id": 2172797, "name": "Cairns"},
	{ "id": 2073124, "name": "Darwin"},
	{ "id": 2160517, "name": "Launceston"},
	{ "id": 2145110, "name": "Wagga Wagga"}
  ] 
}
3.Start JSON Server.
 Go to package.json, add the following line to  "scripts"
 "dataServer": "json-server --watch ./src/data/db.json --port 12000"
4.Check the data on your browser
  http://localhost:12000/cities

