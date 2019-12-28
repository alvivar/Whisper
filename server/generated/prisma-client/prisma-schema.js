module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateBlog {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Blog {
  id: ID!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  name: String!
  created: DateTime!
}

type BlogConnection {
  pageInfo: PageInfo!
  edges: [BlogEdge]!
  aggregate: AggregateBlog!
}

input BlogCreateInput {
  id: ID
  posts: PostCreateManyWithoutBlogInput
  name: String!
}

input BlogCreateOneWithoutPostsInput {
  create: BlogCreateWithoutPostsInput
  connect: BlogWhereUniqueInput
}

input BlogCreateWithoutPostsInput {
  id: ID
  name: String!
}

type BlogEdge {
  node: Blog!
  cursor: String!
}

enum BlogOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  created_ASC
  created_DESC
}

type BlogPreviousValues {
  id: ID!
  name: String!
  created: DateTime!
}

type BlogSubscriptionPayload {
  mutation: MutationType!
  node: Blog
  updatedFields: [String!]
  previousValues: BlogPreviousValues
}

input BlogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BlogWhereInput
  AND: [BlogSubscriptionWhereInput!]
  OR: [BlogSubscriptionWhereInput!]
  NOT: [BlogSubscriptionWhereInput!]
}

input BlogUpdateInput {
  posts: PostUpdateManyWithoutBlogInput
  name: String
}

input BlogUpdateManyMutationInput {
  name: String
}

input BlogUpdateOneRequiredWithoutPostsInput {
  create: BlogCreateWithoutPostsInput
  update: BlogUpdateWithoutPostsDataInput
  upsert: BlogUpsertWithoutPostsInput
  connect: BlogWhereUniqueInput
}

input BlogUpdateWithoutPostsDataInput {
  name: String
}

input BlogUpsertWithoutPostsInput {
  update: BlogUpdateWithoutPostsDataInput!
  create: BlogCreateWithoutPostsInput!
}

input BlogWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  AND: [BlogWhereInput!]
  OR: [BlogWhereInput!]
  NOT: [BlogWhereInput!]
}

input BlogWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createBlog(data: BlogCreateInput!): Blog!
  updateBlog(data: BlogUpdateInput!, where: BlogWhereUniqueInput!): Blog
  updateManyBlogs(data: BlogUpdateManyMutationInput!, where: BlogWhereInput): BatchPayload!
  upsertBlog(where: BlogWhereUniqueInput!, create: BlogCreateInput!, update: BlogUpdateInput!): Blog!
  deleteBlog(where: BlogWhereUniqueInput!): Blog
  deleteManyBlogs(where: BlogWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  author: User!
  likedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  blog: Blog!
  published: Boolean!
  content: String!
  created: DateTime!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  id: ID
  author: UserCreateOneWithoutWrittenPostsInput!
  likedBy: UserCreateManyWithoutLikedPostsInput
  blog: BlogCreateOneWithoutPostsInput!
  published: Boolean!
  content: String!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateManyWithoutBlogInput {
  create: [PostCreateWithoutBlogInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateManyWithoutLikedByInput {
  create: [PostCreateWithoutLikedByInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  id: ID
  likedBy: UserCreateManyWithoutLikedPostsInput
  blog: BlogCreateOneWithoutPostsInput!
  published: Boolean!
  content: String!
}

input PostCreateWithoutBlogInput {
  id: ID
  author: UserCreateOneWithoutWrittenPostsInput!
  likedBy: UserCreateManyWithoutLikedPostsInput
  published: Boolean!
  content: String!
}

input PostCreateWithoutLikedByInput {
  id: ID
  author: UserCreateOneWithoutWrittenPostsInput!
  blog: BlogCreateOneWithoutPostsInput!
  published: Boolean!
  content: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  published_ASC
  published_DESC
  content_ASC
  content_DESC
  created_ASC
  created_DESC
}

type PostPreviousValues {
  id: ID!
  published: Boolean!
  content: String!
  created: DateTime!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  author: UserUpdateOneRequiredWithoutWrittenPostsInput
  likedBy: UserUpdateManyWithoutLikedPostsInput
  blog: BlogUpdateOneRequiredWithoutPostsInput
  published: Boolean
  content: String
}

input PostUpdateManyDataInput {
  published: Boolean
  content: String
}

input PostUpdateManyMutationInput {
  published: Boolean
  content: String
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithoutBlogInput {
  create: [PostCreateWithoutBlogInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutBlogInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutBlogInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithoutLikedByInput {
  create: [PostCreateWithoutLikedByInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutLikedByInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutLikedByInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutAuthorDataInput {
  likedBy: UserUpdateManyWithoutLikedPostsInput
  blog: BlogUpdateOneRequiredWithoutPostsInput
  published: Boolean
  content: String
}

input PostUpdateWithoutBlogDataInput {
  author: UserUpdateOneRequiredWithoutWrittenPostsInput
  likedBy: UserUpdateManyWithoutLikedPostsInput
  published: Boolean
  content: String
}

input PostUpdateWithoutLikedByDataInput {
  author: UserUpdateOneRequiredWithoutWrittenPostsInput
  blog: BlogUpdateOneRequiredWithoutPostsInput
  published: Boolean
  content: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpdateWithWhereUniqueWithoutBlogInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutBlogDataInput!
}

input PostUpdateWithWhereUniqueWithoutLikedByInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutLikedByDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostUpsertWithWhereUniqueWithoutBlogInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutBlogDataInput!
  create: PostCreateWithoutBlogInput!
}

input PostUpsertWithWhereUniqueWithoutLikedByInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutLikedByDataInput!
  create: PostCreateWithoutLikedByInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: UserWhereInput
  likedBy_every: UserWhereInput
  likedBy_some: UserWhereInput
  likedBy_none: UserWhereInput
  blog: BlogWhereInput
  published: Boolean
  published_not: Boolean
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  blog(where: BlogWhereUniqueInput!): Blog
  blogs(where: BlogWhereInput, orderBy: BlogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Blog]!
  blogsConnection(where: BlogWhereInput, orderBy: BlogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BlogConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  blog(where: BlogSubscriptionWhereInput): BlogSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  writtenPosts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  likedPosts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  name: String!
  sessionHash: String!
  created: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  writtenPosts: PostCreateManyWithoutAuthorInput
  likedPosts: PostCreateManyWithoutLikedByInput
  name: String!
  sessionHash: String!
}

input UserCreateManyWithoutLikedPostsInput {
  create: [UserCreateWithoutLikedPostsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutWrittenPostsInput {
  create: UserCreateWithoutWrittenPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLikedPostsInput {
  id: ID
  writtenPosts: PostCreateManyWithoutAuthorInput
  name: String!
  sessionHash: String!
}

input UserCreateWithoutWrittenPostsInput {
  id: ID
  likedPosts: PostCreateManyWithoutLikedByInput
  name: String!
  sessionHash: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  sessionHash_ASC
  sessionHash_DESC
  created_ASC
  created_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  sessionHash: String!
  created: DateTime!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  sessionHash: String
  sessionHash_not: String
  sessionHash_in: [String!]
  sessionHash_not_in: [String!]
  sessionHash_lt: String
  sessionHash_lte: String
  sessionHash_gt: String
  sessionHash_gte: String
  sessionHash_contains: String
  sessionHash_not_contains: String
  sessionHash_starts_with: String
  sessionHash_not_starts_with: String
  sessionHash_ends_with: String
  sessionHash_not_ends_with: String
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  writtenPosts: PostUpdateManyWithoutAuthorInput
  likedPosts: PostUpdateManyWithoutLikedByInput
  name: String
  sessionHash: String
}

input UserUpdateManyDataInput {
  name: String
  sessionHash: String
}

input UserUpdateManyMutationInput {
  name: String
  sessionHash: String
}

input UserUpdateManyWithoutLikedPostsInput {
  create: [UserCreateWithoutLikedPostsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutLikedPostsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutLikedPostsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutWrittenPostsInput {
  create: UserCreateWithoutWrittenPostsInput
  update: UserUpdateWithoutWrittenPostsDataInput
  upsert: UserUpsertWithoutWrittenPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutLikedPostsDataInput {
  writtenPosts: PostUpdateManyWithoutAuthorInput
  name: String
  sessionHash: String
}

input UserUpdateWithoutWrittenPostsDataInput {
  likedPosts: PostUpdateManyWithoutLikedByInput
  name: String
  sessionHash: String
}

input UserUpdateWithWhereUniqueWithoutLikedPostsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutLikedPostsDataInput!
}

input UserUpsertWithoutWrittenPostsInput {
  update: UserUpdateWithoutWrittenPostsDataInput!
  create: UserCreateWithoutWrittenPostsInput!
}

input UserUpsertWithWhereUniqueWithoutLikedPostsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutLikedPostsDataInput!
  create: UserCreateWithoutLikedPostsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  writtenPosts_every: PostWhereInput
  writtenPosts_some: PostWhereInput
  writtenPosts_none: PostWhereInput
  likedPosts_every: PostWhereInput
  likedPosts_some: PostWhereInput
  likedPosts_none: PostWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  sessionHash: String
  sessionHash_not: String
  sessionHash_in: [String!]
  sessionHash_not_in: [String!]
  sessionHash_lt: String
  sessionHash_lte: String
  sessionHash_gt: String
  sessionHash_gte: String
  sessionHash_contains: String
  sessionHash_not_contains: String
  sessionHash_starts_with: String
  sessionHash_not_starts_with: String
  sessionHash_ends_with: String
  sessionHash_not_ends_with: String
  created: DateTime
  created_not: DateTime
  created_in: [DateTime!]
  created_not_in: [DateTime!]
  created_lt: DateTime
  created_lte: DateTime
  created_gt: DateTime
  created_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  name: String
  sessionHash: String
}
`
      }
    