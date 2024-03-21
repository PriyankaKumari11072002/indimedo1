
import { PRODUCT } from '../../utils/apiRoutes/product';
import { apiSlice } from './apiSlice';

const token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjNmODFlMTRmMTQzNDZhMDcxNDcwYyIsImlhdCI6MTcxMTAwNjIyNCwiZXhwIjoxNzExMDkyNjI0fQ.UCb2QgDIABziaOVjllVE0bwsINUMccbMntNIbol4XGI";


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
    add:builder.mutation({
	query:(items)=>({
		

		
		url:`user/addcart`,
		method: 'POST',
		body: items,
			headers: { Authorization: `Bearer ${token}` },
	})	
	}),
	getCart:builder.query({
		query:(items)=>({
			
	
			
			url:`user/getcart`,
			method: 'GET',
			body: items,
				headers: { Authorization: `Bearer ${token}` },
		})	
		}),

		cartDelete:builder.mutation({
			query:()=>({
				url:`user/cartdelete`,
				method: 'DELETE',
			
					headers: { Authorization: `Bearer ${token}` },
			})	
			})
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

export const { useProductDtaQuery,useProductDtaWithIdQuery,useLazyProductDtaWithIdQuery,
	useLazyProductDataByQueryQuery,useAddMutation,useGetCartQuery,useCartDeleteMutation,useLazyGetCartQuery } = productApi
