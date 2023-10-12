
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    minPrice: 0,
    maxPrice: 100,
    country: '',
    days: '',
    region: '',
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setMinPrice: (state, action) => {
            state.minPrice = action.payload;
        },
        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
        },
        setCountry: (state, action) => {
            state.country = action.payload;
        },
        setDays: (state, action) => {
            state.days = action.payload;
        },
    },
});

export const { setMinPrice, setMaxPrice, setCountry, setDays } = filterSlice.actions;
export default filterSlice.reducer;