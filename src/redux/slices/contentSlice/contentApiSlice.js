import { apiSlice } from '../apiSlice';
import { ENDPOINTS } from '../../../utils/endPoints';

export const fileApiSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    fetchFiles: builder.query({
      query: (type) => ({
        url: `${ENDPOINTS.USER_FETCH_FILES}/?type=${type}`,
        method: 'GET',
      }),
    }),

    uploadFile: builder.mutation({
      query: (formData) => ({
        url: ENDPOINTS.USER_UPLOAD_FILE,
        method: 'POST',
        body: formData,
      }),
    }),

  })

});

export const {
  useFetchFilesQuery,
  useUploadFileMutation
} = fileApiSlice;
