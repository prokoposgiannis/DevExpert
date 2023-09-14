import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalObjects: [{ name: 'addNewCardModal', isVisible: false }],
};

const modals = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    changeModalVisibility: (state, action) => {
      let modalIndex = state.modalObjects.findIndex(
        (modal) => modal.name === action.payload
      );
      state.modalObjects[modalIndex].isVisible =
        !state.modalObjects[modalIndex].isVisible;
      console.log(state.modalObjects[modalIndex].isVisible);
    },
  },
});

export const selectModals = (state) => state.modals.modalObjects;
export const { changeModalVisibility } = modals.actions;
export default modals.reducer;
