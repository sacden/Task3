import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../../types/types";
import { BASE_URL } from "../../config";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], string>({
      query: (search) => `users?name_like=${search}`,
    }),
  }),
});

export const { useGetUsersQuery } = searchApi;
