import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
    name: 'result',
    initialState: {
        userid: null,
        result: [],
    },
    reducers: {
        setUserId: (state, action) => {
            state.userid = action.payload;
        },
        pushResultAction: (state, action) => { 
            state.result.push(action.payload);
        },
        updateResultAction: (state, action) => {
            const { index, checked } = action.payload;  
            state.result[index] = checked;  
        },
        resetResultAction: () => ({
            userid: null,
            result: []
        })
    }
});

// ✅ Export actions properly
export const { setUserId, pushResultAction, updateResultAction, resetResultAction } = resultReducer.actions;
export default resultReducer.reducer;
