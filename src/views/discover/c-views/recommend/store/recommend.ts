import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getRecommendList } from '../service/recommend'

// redux request
export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
  const res = await getBanners()
  console.log(res)
  return res.banners
})

export const fetchRecommendListDataAction = createAsyncThunk(
  'recommendList',
  async () => {
    const res = await getRecommendList()
    console.log(res)
    return res.result
  }
)

interface IRecommendState {
  banners: any[]
  recommendList: any[]
}

const initialState: IRecommendState = {
  banners: [],
  recommendList: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerDataAction.pending, () => {
        console.log('pending')
      })
      .addCase(fetchBannerDataAction.fulfilled, (state, action) => {
        state.banners = action.payload
      })
      .addCase(fetchBannerDataAction.rejected, () => {
        console.log('rejected')
      })
      .addCase(fetchRecommendListDataAction.pending, () => {
        console.log('recommend-pending')
      })
      .addCase(fetchRecommendListDataAction.fulfilled, (state, action) => {
        state.recommendList = action.payload
      })
      .addCase(fetchRecommendListDataAction.rejected, () => {
        console.log('recommend-rejected')
      })
  }
})

export default recommendSlice.reducer
