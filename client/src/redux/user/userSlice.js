import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    credential: null,
    loading: false,
    error: false,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFailuser: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { signInStart, signInSuccess, signInFailuser } = userSlice.actions;

export default userSlice.reducer;