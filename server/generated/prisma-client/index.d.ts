// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  post: (where?: PostWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  post: (where: PostWhereUniqueInput) => PostNullablePromise;
  posts: (args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Post>;
  postsConnection: (args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PostConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPost: (data: PostCreateInput) => PostPromise;
  updatePost: (args: {
    data: PostUpdateInput;
    where: PostWhereUniqueInput;
  }) => PostPromise;
  updateManyPosts: (args: {
    data: PostUpdateManyMutationInput;
    where?: PostWhereInput;
  }) => BatchPayloadPromise;
  upsertPost: (args: {
    where: PostWhereUniqueInput;
    create: PostCreateInput;
    update: PostUpdateInput;
  }) => PostPromise;
  deletePost: (where: PostWhereUniqueInput) => PostPromise;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "channel_ASC"
  | "channel_DESC"
  | "content_ASC"
  | "content_DESC"
  | "score_ASC"
  | "score_DESC"
  | "published_ASC"
  | "published_DESC"
  | "expired_ASC"
  | "expired_DESC"
  | "expiration_ASC"
  | "expiration_DESC"
  | "created_ASC"
  | "created_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "sessionHash_ASC"
  | "sessionHash_DESC"
  | "created_ASC"
  | "created_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type PostWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PostWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  author?: Maybe<UserWhereInput>;
  likedBy_every?: Maybe<UserWhereInput>;
  likedBy_some?: Maybe<UserWhereInput>;
  likedBy_none?: Maybe<UserWhereInput>;
  channel?: Maybe<String>;
  channel_not?: Maybe<String>;
  channel_in?: Maybe<String[] | String>;
  channel_not_in?: Maybe<String[] | String>;
  channel_lt?: Maybe<String>;
  channel_lte?: Maybe<String>;
  channel_gt?: Maybe<String>;
  channel_gte?: Maybe<String>;
  channel_contains?: Maybe<String>;
  channel_not_contains?: Maybe<String>;
  channel_starts_with?: Maybe<String>;
  channel_not_starts_with?: Maybe<String>;
  channel_ends_with?: Maybe<String>;
  channel_not_ends_with?: Maybe<String>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  score?: Maybe<Int>;
  score_not?: Maybe<Int>;
  score_in?: Maybe<Int[] | Int>;
  score_not_in?: Maybe<Int[] | Int>;
  score_lt?: Maybe<Int>;
  score_lte?: Maybe<Int>;
  score_gt?: Maybe<Int>;
  score_gte?: Maybe<Int>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  expired?: Maybe<Boolean>;
  expired_not?: Maybe<Boolean>;
  expiration?: Maybe<DateTimeInput>;
  expiration_not?: Maybe<DateTimeInput>;
  expiration_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  expiration_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  expiration_lt?: Maybe<DateTimeInput>;
  expiration_lte?: Maybe<DateTimeInput>;
  expiration_gt?: Maybe<DateTimeInput>;
  expiration_gte?: Maybe<DateTimeInput>;
  created?: Maybe<DateTimeInput>;
  created_not?: Maybe<DateTimeInput>;
  created_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  created_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  created_lt?: Maybe<DateTimeInput>;
  created_lte?: Maybe<DateTimeInput>;
  created_gt?: Maybe<DateTimeInput>;
  created_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<PostWhereInput[] | PostWhereInput>;
  OR?: Maybe<PostWhereInput[] | PostWhereInput>;
  NOT?: Maybe<PostWhereInput[] | PostWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  writtenPosts_every?: Maybe<PostWhereInput>;
  writtenPosts_some?: Maybe<PostWhereInput>;
  writtenPosts_none?: Maybe<PostWhereInput>;
  likedPosts_every?: Maybe<PostWhereInput>;
  likedPosts_some?: Maybe<PostWhereInput>;
  likedPosts_none?: Maybe<PostWhereInput>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  sessionHash?: Maybe<String>;
  sessionHash_not?: Maybe<String>;
  sessionHash_in?: Maybe<String[] | String>;
  sessionHash_not_in?: Maybe<String[] | String>;
  sessionHash_lt?: Maybe<String>;
  sessionHash_lte?: Maybe<String>;
  sessionHash_gt?: Maybe<String>;
  sessionHash_gte?: Maybe<String>;
  sessionHash_contains?: Maybe<String>;
  sessionHash_not_contains?: Maybe<String>;
  sessionHash_starts_with?: Maybe<String>;
  sessionHash_not_starts_with?: Maybe<String>;
  sessionHash_ends_with?: Maybe<String>;
  sessionHash_not_ends_with?: Maybe<String>;
  created?: Maybe<DateTimeInput>;
  created_not?: Maybe<DateTimeInput>;
  created_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  created_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  created_lt?: Maybe<DateTimeInput>;
  created_lte?: Maybe<DateTimeInput>;
  created_gt?: Maybe<DateTimeInput>;
  created_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
  sessionHash?: Maybe<String>;
}>;

export interface PostCreateInput {
  id?: Maybe<ID_Input>;
  author?: Maybe<UserCreateOneWithoutWrittenPostsInput>;
  likedBy?: Maybe<UserCreateManyWithoutLikedPostsInput>;
  channel?: Maybe<String>;
  content: String;
  score?: Maybe<Int>;
  published?: Maybe<Boolean>;
  expired?: Maybe<Boolean>;
  expiration: DateTimeInput;
}

export interface UserCreateOneWithoutWrittenPostsInput {
  create?: Maybe<UserCreateWithoutWrittenPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutWrittenPostsInput {
  id?: Maybe<ID_Input>;
  likedPosts?: Maybe<PostCreateManyWithoutLikedByInput>;
  name: String;
  sessionHash: String;
}

export interface PostCreateManyWithoutLikedByInput {
  create?: Maybe<
    PostCreateWithoutLikedByInput[] | PostCreateWithoutLikedByInput
  >;
  connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
}

export interface PostCreateWithoutLikedByInput {
  id?: Maybe<ID_Input>;
  author?: Maybe<UserCreateOneWithoutWrittenPostsInput>;
  channel?: Maybe<String>;
  content: String;
  score?: Maybe<Int>;
  published?: Maybe<Boolean>;
  expired?: Maybe<Boolean>;
  expiration: DateTimeInput;
}

export interface UserCreateManyWithoutLikedPostsInput {
  create?: Maybe<
    UserCreateWithoutLikedPostsInput[] | UserCreateWithoutLikedPostsInput
  >;
  connect?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
}

export interface UserCreateWithoutLikedPostsInput {
  id?: Maybe<ID_Input>;
  writtenPosts?: Maybe<PostCreateManyWithoutAuthorInput>;
  name: String;
  sessionHash: String;
}

export interface PostCreateManyWithoutAuthorInput {
  create?: Maybe<PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput>;
  connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
}

export interface PostCreateWithoutAuthorInput {
  id?: Maybe<ID_Input>;
  likedBy?: Maybe<UserCreateManyWithoutLikedPostsInput>;
  channel?: Maybe<String>;
  content: String;
  score?: Maybe<Int>;
  published?: Maybe<Boolean>;
  expired?: Maybe<Boolean>;
  expiration: DateTimeInput;
}

export interface PostUpdateInput {
  author?: Maybe<UserUpdateOneWithoutWrittenPostsInput>;
  likedBy?: Maybe<UserUpdateManyWithoutLikedPostsInput>;
  channel?: Maybe<String>;
  content?: Maybe<String>;
  score?: Maybe<Int>;
  published?: Maybe<Boolean>;
  expired?: Maybe<Boolean>;
  expiration?: Maybe<DateTimeInput>;
}

export interface UserUpdateOneWithoutWrittenPostsInput {
  create?: Maybe<UserCreateWithoutWrittenPostsInput>;
  update?: Maybe<UserUpdateWithoutWrittenPostsDataInput>;
  upsert?: Maybe<UserUpsertWithoutWrittenPostsInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutWrittenPostsDataInput {
  likedPosts?: Maybe<PostUpdateManyWithoutLikedByInput>;
  name?: Maybe<String>;
  sessionHash?: Maybe<String>;
}

export interface PostUpdateManyWithoutLikedByInput {
  create?: Maybe<
    PostCreateWithoutLikedByInput[] | PostCreateWithoutLikedByInput
  >;
  delete?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  set?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  disconnect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  update?: Maybe<
    | PostUpdateWithWhereUniqueWithoutLikedByInput[]
    | PostUpdateWithWhereUniqueWithoutLikedByInput
  >;
  upsert?: Maybe<
    | PostUpsertWithWhereUniqueWithoutLikedByInput[]
    | PostUpsertWithWhereUniqueWithoutLikedByInput
  >;
  deleteMany?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
  updateMany?: Maybe<
    PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput
  >;
}

export interface PostUpdateWithWhereUniqueWithoutLikedByInput {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutLikedByDataInput;
}

export interface PostUpdateWithoutLikedByDataInput {
  author?: Maybe<UserUpdateOneWithoutWrittenPostsInput>;
  channel?: Maybe<String>;
  content?: Maybe<String>;
  score?: Maybe<Int>;
  published?: Maybe<Boolean>;
  expired?: Maybe<Boolean>;
  expiration?: Maybe<DateTimeInput>;
}

export interface PostUpsertWithWhereUniqueWithoutLikedByInput {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutLikedByDataInput;
  create: PostCreateWithoutLikedByInput;
}

export interface PostScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  channel?: Maybe<String>;
  channel_not?: Maybe<String>;
  channel_in?: Maybe<String[] | String>;
  channel_not_in?: Maybe<String[] | String>;
  channel_lt?: Maybe<String>;
  channel_lte?: Maybe<String>;
  channel_gt?: Maybe<String>;
  channel_gte?: Maybe<String>;
  channel_contains?: Maybe<String>;
  channel_not_contains?: Maybe<String>;
  channel_starts_with?: Maybe<String>;
  channel_not_starts_with?: Maybe<String>;
  channel_ends_with?: Maybe<String>;
  channel_not_ends_with?: Maybe<String>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  score?: Maybe<Int>;
  score_not?: Maybe<Int>;
  score_in?: Maybe<Int[] | Int>;
  score_not_in?: Maybe<Int[] | Int>;
  score_lt?: Maybe<Int>;
  score_lte?: Maybe<Int>;
  score_gt?: Maybe<Int>;
  score_gte?: Maybe<Int>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  expired?: Maybe<Boolean>;
  expired_not?: Maybe<Boolean>;
  expiration?: Maybe<DateTimeInput>;
  expiration_not?: Maybe<DateTimeInput>;
  expiration_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  expiration_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  expiration_lt?: Maybe<DateTimeInput>;
  expiration_lte?: Maybe<DateTimeInput>;
  expiration_gt?: Maybe<DateTimeInput>;
  expiration_gte?: Maybe<DateTimeInput>;
  created?: Maybe<DateTimeInput>;
  created_not?: Maybe<DateTimeInput>;
  created_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  created_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  created_lt?: Maybe<DateTimeInput>;
  created_lte?: Maybe<DateTimeInput>;
  created_gt?: Maybe<DateTimeInput>;
  created_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
  OR?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
  NOT?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
}

export interface PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput;
  data: PostUpdateManyDataInput;
}

export interface PostUpdateManyDataInput {
  channel?: Maybe<String>;
  content?: Maybe<String>;
  score?: Maybe<Int>;
  published?: Maybe<Boolean>;
  expired?: Maybe<Boolean>;
  expiration?: Maybe<DateTimeInput>;
}

export interface UserUpsertWithoutWrittenPostsInput {
  update: UserUpdateWithoutWrittenPostsDataInput;
  create: UserCreateWithoutWrittenPostsInput;
}

export interface UserUpdateManyWithoutLikedPostsInput {
  create?: Maybe<
    UserCreateWithoutLikedPostsInput[] | UserCreateWithoutLikedPostsInput
  >;
  delete?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  connect?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  set?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  update?: Maybe<
    | UserUpdateWithWhereUniqueWithoutLikedPostsInput[]
    | UserUpdateWithWhereUniqueWithoutLikedPostsInput
  >;
  upsert?: Maybe<
    | UserUpsertWithWhereUniqueWithoutLikedPostsInput[]
    | UserUpsertWithWhereUniqueWithoutLikedPostsInput
  >;
  deleteMany?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
  updateMany?: Maybe<
    UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput
  >;
}

export interface UserUpdateWithWhereUniqueWithoutLikedPostsInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutLikedPostsDataInput;
}

export interface UserUpdateWithoutLikedPostsDataInput {
  writtenPosts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  name?: Maybe<String>;
  sessionHash?: Maybe<String>;
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: Maybe<PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput>;
  delete?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  set?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  disconnect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  update?: Maybe<
    | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    | PostUpdateWithWhereUniqueWithoutAuthorInput
  >;
  upsert?: Maybe<
    | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    | PostUpsertWithWhereUniqueWithoutAuthorInput
  >;
  deleteMany?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
  updateMany?: Maybe<
    PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput
  >;
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorDataInput;
}

export interface PostUpdateWithoutAuthorDataInput {
  likedBy?: Maybe<UserUpdateManyWithoutLikedPostsInput>;
  channel?: Maybe<String>;
  content?: Maybe<String>;
  score?: Maybe<Int>;
  published?: Maybe<Boolean>;
  expired?: Maybe<Boolean>;
  expiration?: Maybe<DateTimeInput>;
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorDataInput;
  create: PostCreateWithoutAuthorInput;
}

export interface UserUpsertWithWhereUniqueWithoutLikedPostsInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutLikedPostsDataInput;
  create: UserCreateWithoutLikedPostsInput;
}

export interface UserScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  sessionHash?: Maybe<String>;
  sessionHash_not?: Maybe<String>;
  sessionHash_in?: Maybe<String[] | String>;
  sessionHash_not_in?: Maybe<String[] | String>;
  sessionHash_lt?: Maybe<String>;
  sessionHash_lte?: Maybe<String>;
  sessionHash_gt?: Maybe<String>;
  sessionHash_gte?: Maybe<String>;
  sessionHash_contains?: Maybe<String>;
  sessionHash_not_contains?: Maybe<String>;
  sessionHash_starts_with?: Maybe<String>;
  sessionHash_not_starts_with?: Maybe<String>;
  sessionHash_ends_with?: Maybe<String>;
  sessionHash_not_ends_with?: Maybe<String>;
  created?: Maybe<DateTimeInput>;
  created_not?: Maybe<DateTimeInput>;
  created_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  created_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  created_lt?: Maybe<DateTimeInput>;
  created_lte?: Maybe<DateTimeInput>;
  created_gt?: Maybe<DateTimeInput>;
  created_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
  OR?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
  NOT?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
}

export interface UserUpdateManyDataInput {
  name?: Maybe<String>;
  sessionHash?: Maybe<String>;
}

export interface PostUpdateManyMutationInput {
  channel?: Maybe<String>;
  content?: Maybe<String>;
  score?: Maybe<Int>;
  published?: Maybe<Boolean>;
  expired?: Maybe<Boolean>;
  expiration?: Maybe<DateTimeInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  writtenPosts?: Maybe<PostCreateManyWithoutAuthorInput>;
  likedPosts?: Maybe<PostCreateManyWithoutLikedByInput>;
  name: String;
  sessionHash: String;
}

export interface UserUpdateInput {
  writtenPosts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  likedPosts?: Maybe<PostUpdateManyWithoutLikedByInput>;
  name?: Maybe<String>;
  sessionHash?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  sessionHash?: Maybe<String>;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PostWhereInput>;
  AND?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
  OR?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
  NOT?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Post {
  id: ID_Output;
  channel?: String;
  content: String;
  score?: Int;
  published: Boolean;
  expired: Boolean;
  expiration: DateTimeOutput;
  created: DateTimeOutput;
}

export interface PostPromise extends Promise<Post>, Fragmentable {
  id: () => Promise<ID_Output>;
  author: <T = UserPromise>() => T;
  likedBy: <T = FragmentableArray<User>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  channel: () => Promise<String>;
  content: () => Promise<String>;
  score: () => Promise<Int>;
  published: () => Promise<Boolean>;
  expired: () => Promise<Boolean>;
  expiration: () => Promise<DateTimeOutput>;
  created: () => Promise<DateTimeOutput>;
}

export interface PostSubscription
  extends Promise<AsyncIterator<Post>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  author: <T = UserSubscription>() => T;
  likedBy: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  channel: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
  score: () => Promise<AsyncIterator<Int>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  expired: () => Promise<AsyncIterator<Boolean>>;
  expiration: () => Promise<AsyncIterator<DateTimeOutput>>;
  created: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface PostNullablePromise
  extends Promise<Post | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  author: <T = UserPromise>() => T;
  likedBy: <T = FragmentableArray<User>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  channel: () => Promise<String>;
  content: () => Promise<String>;
  score: () => Promise<Int>;
  published: () => Promise<Boolean>;
  expired: () => Promise<Boolean>;
  expiration: () => Promise<DateTimeOutput>;
  created: () => Promise<DateTimeOutput>;
}

export interface User {
  id: ID_Output;
  name: String;
  sessionHash: String;
  created: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  writtenPosts: <T = FragmentableArray<Post>>(args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  likedPosts: <T = FragmentableArray<Post>>(args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  name: () => Promise<String>;
  sessionHash: () => Promise<String>;
  created: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  writtenPosts: <T = Promise<AsyncIterator<PostSubscription>>>(args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  likedPosts: <T = Promise<AsyncIterator<PostSubscription>>>(args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  name: () => Promise<AsyncIterator<String>>;
  sessionHash: () => Promise<AsyncIterator<String>>;
  created: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  writtenPosts: <T = FragmentableArray<Post>>(args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  likedPosts: <T = FragmentableArray<Post>>(args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  name: () => Promise<String>;
  sessionHash: () => Promise<String>;
  created: () => Promise<DateTimeOutput>;
}

export interface PostConnection {
  pageInfo: PageInfo;
  edges: PostEdge[];
}

export interface PostConnectionPromise
  extends Promise<PostConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PostEdge>>() => T;
  aggregate: <T = AggregatePostPromise>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface PostEdge {
  node: Post;
  cursor: String;
}

export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
  node: <T = PostPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdge>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePost {
  count: Int;
}

export interface AggregatePostPromise
  extends Promise<AggregatePost>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePost>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PostSubscriptionPayload {
  mutation: MutationType;
  node: Post;
  updatedFields: String[];
  previousValues: PostPreviousValues;
}

export interface PostSubscriptionPayloadPromise
  extends Promise<PostSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PostPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValuesPromise>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface PostPreviousValues {
  id: ID_Output;
  channel?: String;
  content: String;
  score?: Int;
  published: Boolean;
  expired: Boolean;
  expiration: DateTimeOutput;
  created: DateTimeOutput;
}

export interface PostPreviousValuesPromise
  extends Promise<PostPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  channel: () => Promise<String>;
  content: () => Promise<String>;
  score: () => Promise<Int>;
  published: () => Promise<Boolean>;
  expired: () => Promise<Boolean>;
  expiration: () => Promise<DateTimeOutput>;
  created: () => Promise<DateTimeOutput>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  channel: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
  score: () => Promise<AsyncIterator<Int>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  expired: () => Promise<AsyncIterator<Boolean>>;
  expiration: () => Promise<AsyncIterator<DateTimeOutput>>;
  created: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  sessionHash: String;
  created: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  sessionHash: () => Promise<String>;
  created: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  sessionHash: () => Promise<AsyncIterator<String>>;
  created: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
