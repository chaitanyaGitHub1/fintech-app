import { apiSlice } from "./apiSlice";

export const serviceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (imageUri) => ({
        url: "/service/image-upload",
        method: "POST",
        body: imageUri,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});


export const { useUploadImageMutation } = serviceApiSlice;