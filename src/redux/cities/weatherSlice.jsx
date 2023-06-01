import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchWeatherDataByName = createAsyncThunk(
  'weather/fetchWeatherData',
  async (cityName) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=27bbc6a99eacf81c5f9443ed3b451b16`);
    const data = await response.json();
    return data;
  },
);

export const fetchWeatherDataByCityId = createAsyncThunk(
  'weather/fetchWeatherData',
  async (id = 0) => {
    try {
      if (id > 0) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/group?id=${id}&units=metric&appid=27bbc6a99eacf81c5f9443ed3b451b16`);
        const data = await response.json();
        return data;
      }
      const cityId = [3421319, 5880054, 2122311, 6185377, 2643743,
        1850147, 6173331, 5391959, 292223, 360630, 1609350, 2147714];
      const response = await fetch(`https://api.openweathermap.org/data/2.5/group?id=${cityId.join(',')}&units=metric&appid=27bbc6a99eacf81c5f9443ed3b451b16`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = [];

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    addCity: (state, action) => {
      state.cities.push([...state.cities, action.payload]);
    },
    setCities: (state, action) => {
      state.cities.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherDataByName.fulfilled, (state, action) => {
        state.push(action.payload.list.map((item) => ({
          id: item.id,
          name: item.name,
          main: item.main,
        })));
      });
  },

});

export const { addCity, setCities } = citySlice.actions;
export default citySlice.reducer;
