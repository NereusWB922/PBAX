import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["ProteinInteractions"],
  endpoints: (build) => ({
    searchProteinInteractions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "api/protein-interactions/search",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["ProteinInteractions"],
    }),
  }),
});

export const { useSearchProteinInteractionsQuery } = api;
