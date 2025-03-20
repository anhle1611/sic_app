import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig.extra.apiUrl;

// Async action để gọi API login
export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      console.log(`${apiUrl}/api/v1/login/access-token`)
      const response = await axios.post(`${apiUrl}/api/v1/login/access-token`, {
        username,
        password,
      });
      return response.data; // Trả về dữ liệu nếu thành công
    } catch (error) {
      console.error('login error:', error);
      return rejectWithValue(error.response?.data?.message || 'Đăng nhập thất bại');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;