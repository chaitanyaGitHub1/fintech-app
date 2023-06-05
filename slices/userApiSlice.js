import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/users/userLogin`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `/users/registerUser`,
        method: "POST",
        body: data,
      }),
    }),
    verifyUserOtp: builder.mutation({
      query: (data) => ({
        url: `/users/verifyOtp`,
        method: "POST",
        body: data,
      }),
    }),
    // getUser: builder.mutation({
    //   query: (data) => ({
    //     url: `${USERS_URL}/profile`,
    //     method: "PUT",
    //     body: data,
    //   }),
    // }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useVerifyUserOtpMutation,
  // useUpdateUserMutation,
} = userApiSlice;
