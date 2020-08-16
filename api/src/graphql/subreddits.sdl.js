export const schema = gql`
  type Subreddit {
    id: Int!
    name: String!
    createdAt: DateTime!
  }

  type Query {
    subreddits: [Subreddit!]!
    subreddit(id: Int!): Subreddit!
  }

  input CreateSubredditInput {
    name: String!
  }

  input UpdateSubredditInput {
    name: String
  }

  type Mutation {
    createSubreddit(input: CreateSubredditInput!): Subreddit!
    updateSubreddit(id: Int!, input: UpdateSubredditInput!): Subreddit!
    deleteSubreddit(id: Int!): Subreddit!
  }
`
