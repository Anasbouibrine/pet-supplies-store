import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
  name: "ProPet",
  initialState: {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
    currentPage: "",
  },
  reducers: {
    updateProduct: (state, action) => {
      state.products = action.payload;
    },
    updateCategory: (state, action) => {
      state.categories = action.payload;
    },
    updateCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    addToCart: (state, action) => {
      state.cartOpen = true;
      state.cart.push(action.payload);
    },
    addMultipleToCart: (state, action) => {
      state.cart.push(...action.payload);
    },
    deleteFromCart: (state, action) => {
      let newState = state.cart.filter((product) => {
        return product._id !== action.payload._id;
      });
      state.cartOpen = newState.length > 0;
      state.cart = newState;
    },
    updateCartQuantity: (state, action) => {
      state.cartOpen = true;
      state.cart = state.cart.map((product) => {
        if (action.payload._id === product._id) {
          product.purchaseQuantity = action.payload.purchaseQuantity;
        }
        return product;
      });
    },
    clearCart: (state, action) => {
      state.cartOpen = false;
      state.cart = [];
    },
    toggle_Cart: (state, action) => {
      state.cartOpen = !state.cartOpen;
    },
  },
});

export const {
  updateProduct,
  updateCategory,
  updateCurrentCategory,
  add2Cart,
  addMultipleToCart,
  deleteFromCart,
  updateCartQuantity,
  clearCart,
  toggle_Cart,
  updateCurrentPage,
} = storeSlice.actions;

export default storeSlice.reducer;
