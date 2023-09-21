import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SearchProtienInteractionsResponse,
  SearchProtienInteractionsParam,
} from "../types/types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["ProteinInteractions"],
  endpoints: (build) => ({
    searchProteinInteractions: build.query<
      SearchProtienInteractionsResponse,
      SearchProtienInteractionsParam
    >({
      query: ({ paginationModel, sort, search }) => ({
        url: "api/protein-interactions/search",
        method: "GET",
        params: { paginationModel, sort, search },
      }),
      providesTags: ["ProteinInteractions"],
    }),
  }),
});

export const { useSearchProteinInteractionsQuery } = api;
