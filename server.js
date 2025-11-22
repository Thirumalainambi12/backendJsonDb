const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "anime.json")); // your JSON file
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 4000;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(PORT, () => {
  console.log(`🔥 JSON Server is running at http://localhost:${PORT}`);
});
