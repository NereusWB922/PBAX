import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  SearchProtienInteractionsResponse,
  SearchProtienInteractionsParam,
  GetOptionsParam,
  GetOptionsResponse,
} from "../types/types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["ProteinInteractions", "Options"],
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
    getOptions: build.query<GetOptionsResponse, GetOptionsParam>({
      query: ({ field, protein1 }) => ({
        url: `api/options/${field}`,
        method: "GET",
        params: { protein1 },
      }),
      providesTags: ["Options"],
    }),
  }),
});

export const { useSearchProteinInteractionsQuery, useGetOptionsQuery } = api;
