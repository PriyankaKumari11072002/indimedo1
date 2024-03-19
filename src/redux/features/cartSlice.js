import { createSlice } from '@reduxjs/toolkit';

const  cartSlice = createSlice({
	name: 'cart',
	initialState: {cart: [] ,count:null},
	reducers: {
		addToCart: (state, action) => {
			console.log(action,'action')
			state.cart.push(action.payload) 
            state.count = action.payload

	


		},
		
	},
});

export const {addToCart } =  cartSlice.actions;
export default  cartSlice.reducer;


// const itemIndex = 	state.cart.findIndex(item=>item.id===action.payload.id)
//     console.log(itemIndex,'index')
// if(itemIndex>=0){
// state.cartItems[itemIndex].cardQuantity += 1
// }
//              const tempProduct = {...action.payload,cartTotalQuantity:1}
// 			state.cartItems.push(tempProduct) 