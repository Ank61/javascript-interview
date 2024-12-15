const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    email: String!
    bio: String
    createdAt: String
    updatedAt: String
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    description: String
    author: Author!
    publishedDate: String
    rating: Float
    createdAt: String
    updatedAt: String
    reviews: [Review]
  }

  type Review {
    id: ID!
    book: Book!
    reviewerName: String!
    content: String
    rating: Float!
    createdAt: String
    updatedAt: String
  }

  input CreateAuthorInput {
    name: String!
    email: String!
    bio: String
  }

  input CreateBookInput {
    title: String!
    description: String
    authorId: ID!
    publishedDate: String
  }

  input AddReviewInput {
    bookId: ID!
    reviewerName: String!
    content: String
    rating: Float!
  }

  type Query {
    getAllBooks: [Book]
    getBook(id: ID!): Book
    getAuthors: [Author]
  }

  type Mutation {
    createAuthor(input: CreateAuthorInput): Author
    createBook(input: CreateBookInput): Book
    addReview(input: AddReviewInput): Review
    updateBookRating(id: ID!): Book
  }
`;

const resolvers = {
    Query: {
      getAllBooks: async (_, __, { prisma }) => {
        return await prisma.book.findMany({
          include: {
            author: true,
            reviews: true,
          },
        });
      },
      getBook: async (_, { id }, { prisma }) => {
        return await prisma.book.findUnique({
          where: { id: parseInt(id) },
          include: {
            author: true,
            reviews: true,
          },
        });
      },
      getAuthors: async (_, __, { prisma }) => {
        return await prisma.author.findMany({
          include: {
            books: true,
          },
        });
      },
    },
    Mutation: {
      createAuthor: async (_, { input }, { prisma }) => {
        return await prisma.author.create({ data: input });
      },
      createBook: async (_, { input }, { prisma }) => {
        return await prisma.book.create({ data: input });
      },
      addReview: async (_, { input }, { prisma }) => {
        const review = await prisma.review.create({ data: input });
        const reviews = await prisma.review.findMany({
          where: { bookId: parseInt(input.bookId) },
        });
  
        const averageRating =
          reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  
        await prisma.book.update({
          where: { id: parseInt(input.bookId) },
          data: { rating: averageRating },
        });
  
        return review;
      },
      updateBookRating: async (_, { id }, { prisma }) => {
        const reviews = await prisma.review.findMany({
          where: { bookId: parseInt(id) },
        });
  
        const averageRating =
          reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  
        return await prisma.book.update({
          where: { id: parseInt(id) },
          data: { rating: averageRating },
        });
      },
    },
    Book: {
      author: async (book, _, { prisma }) => {
        return await prisma.author.findUnique({ where: { id: book.authorId } });
      },
      reviews: async (book, _, { prisma }) => {
        return await prisma.review.findMany({ where: { bookId: book.id } });
      },
    },
    Review: {
      book: async (review, _, { prisma }) => {
        return await prisma.book.findUnique({ where: { id: review.bookId } });
      },
    },
  };

module.exports = { typeDefs,resolvers };
