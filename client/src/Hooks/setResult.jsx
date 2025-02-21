import * as Action from '../Redux/result_reducer';

export const PushAnswer = (result) => (dispatch) => {
    try {
        dispatch(Action.pushResultAction(result));
    } catch (error) {
        console.error("Error in PushAnswer:", error);
    } 
};

export const updateResult = (index) => (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));  // Removed extra object wrapping
    } catch (error) {
        console.error("Error in updateResult:", error);
    }
};
