const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./model/index");
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      prisma,
    }),
  });

  const app = express();
  app.use(express.json());

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
