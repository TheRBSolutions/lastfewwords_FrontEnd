import { apiSlice } from '../apiSlice';
import { ENDPOINTS } from '../../../utils/endPoints';

export const authApiSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    login: builder.mutation({
      query: (data) => ({
        url: ENDPOINTS.USER_LOGIN,
        method: 'POST',
        body: data
      })
    }),

    signup: builder.mutation({
      query: (data) => ({
        url: ENDPOINTS.USER_SIGNUP,
        method: 'POST',
        body: data
      })
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: ENDPOINTS.USER_FORGOT_PASSWORD,
        method: 'POST',
        body: data,
      }),
    }),

    resetPassword: builder.mutation({
      query: ({ token, ...data }) => ({
        url: `${ENDPOINTS.USER_RESET_PASSWORD}/${token}`,
        method: 'POST',
        body: data,
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: `${ENDPOINTS.USER_CHANGE_PASSWORD}`,
        method: 'POST',
        body: data,
      }),
    }),

    updateUserInfo: builder.mutation({
      query: (data) => ({
        url: `${ENDPOINTS.USER_UPDATE_INFO}`,
        method: 'PUT',
        body: data,
      }),
    }),

  })

});

export const {
  useLoginMutation,
  useSignupMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useUpdateUserInfoMutation
} = authApiSlice;