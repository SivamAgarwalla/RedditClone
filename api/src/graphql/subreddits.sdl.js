export const schema = gql`
  type Subreddit {
    id: Int!
    name: String!
    description: String
    createdAt: DateTime!
  }

  type Query {
    subreddits: [Subreddit!]!
    subreddit(id: Int!): Subreddit!
  }

  input CreateSubredditInput {
    name: String!
    description: String
  }

  input UpdateSubredditInput {
    name: String
    description: String
  }

  type Mutation {
    createSubreddit(input: CreateSubredditInput!): Subreddit!
    updateSubreddit(id: Int!, input: UpdateSubredditInput!): Subreddit!
    deleteSubreddit(id: Int!): Subreddit!
  }
`
