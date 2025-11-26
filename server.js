import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("anime.json");  // your json file name
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});