import { PRODUCT } from "../../utils/apiRoutes/product";
import { apiSlice } from "./apiSlice";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmMwNTRjZWJiYjMxZTI0Yzk5OTcwZiIsImlhdCI6MTcxMTE5MDM0NywiZXhwIjoxNzExMjc2NzQ3fQ.1rCHPwYLYRhcJvuPhfhM1j5mtvMdZ8I_AbTpNmDftII";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    productDta: builder.query({
      query: () => ({
        headers: {
          "Content-type": "application/json",
		  
        },
        url: `${PRODUCT}`,
        method: "GET",
      }),
    }),

    productDtaWithId: builder.query({
      query: (id) => ({
        headers: {
          "Content-type": "application/json",
        },
        url: `${PRODUCT}${id}`,
        method: "GET",
      }),
    }),

    productDataByQuery: builder.query({
      query: (query) => ({
        headers: {
          "Content-type": "application/json",
        },
        url: `${PRODUCT}search?query=${query}`,
        method: "GET",
      }),
    }),

    productSearchByQuery: builder.query({
      query: (query) => ({
        headers: {
          "Content-type": "application/json",
        },
        url: `${PRODUCT}search?query=${query}`,
        method: "GET",
      }),
    }),

    add: builder.mutation({
      query: (items) => ({
        url: `user/addtocart`,
        method: "POST",
        body: items,
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
    getCart: builder.query({
      query: (items) => ({
        url: `user/getcart`,
        method: "GET",
        body: items,
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
    cartUpdate: builder.mutation({
      query: (updateCartId) => ({
        url: `user/cart/update`,
        method: "PUT",
        body: updateCartId,
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
    cartDelete: builder.mutation({
      query: () => ({
        url: `user/cartdelete`,
        method: "DELETE",

        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
    // add: builder.mutation({
    // 	query: (cartData) => ({
    // 		headers: {
    // 			Authorization: `Bearer ${token}`,
    // 		  },
    // 	  url: '/user/addcart',
    // 	  method: 'POST',
    // 	  body: cartData,

    // 	}),
    //   }),
  }),
});

export const {
  useProductDtaQuery,
  useProductDtaWithIdQuery,
  useLazyProductDtaWithIdQuery,
  useLazyProductDataByQueryQuery,
  useAddMutation,
  useGetCartQuery,
  useCartDeleteMutation,
  useLazyGetCartQuery,
  useLazyProductSearchByQueryQuery,
  useCartUpdateMutation
} = productApi;
