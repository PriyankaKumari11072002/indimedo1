// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PRODUCT } from '../../utils/apiRoutes/product';
import { apiSlice } from './apiSlice';

export const productApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		
		productDta: builder.query({
			query: () => ({
				headers: {
					'Content-type': 'application/json',
				},
				url: `${PRODUCT}`,
				method: 'GET',
			}),
		}),

		productDtaWithId: builder.query({
			query: (id) => ({
				headers: {
					'Content-type': 'application/json',
				},
				url: `${PRODUCT}${id}`,
				method: 'GET',
			}),
		}),

		productDataByQuery: builder.query({
			query: (query) => ({
				headers: {
					'Content-type': 'application/json',
				},
				url: `${PRODUCT}search?query=${query}`,
				method: 'GET',
			}),
		}),
    addToCartItems:builder.mutation({
	query:()=>({
		headers:{'Content-type':'application/json',},
		url:`${PRODUCT}user/addcart`,
		method: 'POST',
	})	
	})
		
		
		
	}),
});

export const { useProductDtaQuery,useProductDtaWithIdQuery,useLazyProductDtaWithIdQuery,
	useLazyProductDataByQueryQuery,useAddToCartItemsMutation } = productApi
