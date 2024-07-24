import { createSlice } from "@reduxjs/toolkit";

const certificateSlice = createSlice({
  name: "certificate",
  initialState: {
    show: false,
  },
  reducers: {
    showCertificate: (state) => {
      state.show = true
    },
    hideCertificate: (state) => {
      state.show = false
    }
  }
});

export default certificateSlice.reducer;

export const certificateSelector = state => state.certificate;
export const {showCertificate, hideCertificate} = certificateSlice.actions