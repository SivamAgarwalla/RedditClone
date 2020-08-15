export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post!
  }

  input CreatePostInput {
    title: String!
    body: String!
    subredditId: Int!
  }

  input UpdatePostInput {
    title: String
    body: String
    subredditId: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
