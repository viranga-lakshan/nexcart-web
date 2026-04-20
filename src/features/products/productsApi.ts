import { baseApi } from '@/api/baseApi';

import type { ApiResponse } from '@/types/api';

import type {
  Category,
  CreateProductInput,
  Product,
  ProductFilters,
  UpdateProductInput,
} from '@/types/product';

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    listProducts: builder.query<ApiResponse<Product[]>, ProductFilters | void>({
      query: (params) => ({ url: '/products', params }),
      providesTags: ['Products'],
    }),

    getProduct: builder.query<ApiResponse<Product>, string>({
      query: (productId) => ({ url: `/products/${productId}` }),
      providesTags: (_result, _error, id) => [{ type: 'Products', id }],
    }),

    listMyProducts: builder.query<ApiResponse<Product[]>, ProductFilters | void>({
      query: (params) => ({ url: '/products/me/listings', params }),
      providesTags: ['Products'],
    }),

    listCategories: builder.query<ApiResponse<Category[]>, void>({
      query: () => ({ url: '/categories' }),
      providesTags: ['Categories'],
    }),

    createProduct: builder.mutation<ApiResponse<Product>, CreateProductInput>({
      query: (data) => ({ url: '/products', method: 'POST', data }),
      invalidatesTags: ['Products'],
    }),

    updateProduct: builder.mutation<
      ApiResponse<Product>,
      { productId: string; data: UpdateProductInput }
    >({
      query: ({ productId, data }) => ({
        url: `/products/${productId}`,
        method: 'PATCH',
        data,
      }),
      invalidatesTags: ['Products', 'Admin'],
    }),

    deleteProduct: builder.mutation<ApiResponse<null>, string>({
      query: (productId) => ({ url: `/products/${productId}`, method: 'DELETE' }),
      invalidatesTags: ['Products', 'Admin'],
    }),

    uploadProductImage: builder.mutation<ApiResponse<{ url: string }>, FormData>({
      query: (formData) => ({
        url: '/uploads/product-image',
        method: 'POST',
        data: formData,
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
  useListCategoriesQuery,
  useListMyProductsQuery,
  useListProductsQuery,
  useUpdateProductMutation,
  useUploadProductImageMutation,
} = productsApi;
