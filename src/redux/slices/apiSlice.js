import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../utils/endPoints';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL.BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState()?.auth;
    const access_token = state?.userInfo?.token;
    if (access_token) {
      headers.set('Authorization', `Bearer ${access_token}`);
      // headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
    }
    return headers;
  }
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [
    'auth',
  ],
  endpoints: () => ({})
});
