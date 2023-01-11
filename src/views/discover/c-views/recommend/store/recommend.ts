import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanners,
  getNewAlbum,
  getPlayListDetail,
  getRecommendList
} from '../service/recommend'

const rankingIds = [19723756, 3779629, 2884035]
// redux request
export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
  const res = await getBanners()
  console.log(res)
  return res.banners
})

export const fetchRecommendListDataAction = createAsyncThunk(
  'recommendList',
  async () => {
    const res = await getRecommendList(8)
    console.log(res)
    return res.result
  }
)

export const fetchNewAlbumListDataAction = createAsyncThunk(
  'newAlbum',
  async () => {
    const res = await getNewAlbum()
    console.log('newAlbum', res)
    return res.albums
  }
)

export const fetchGetPlayListDetailAction = createAsyncThunk(
  'playListDetail',
  async () => {
    const promises = rankingIds.map((id) => getPlayListDetail(id))

    const res = await Promise.all(promises)
    console.log('playListDetail', res)
    return res
  }
)
interface IRecommendState {
  banners: any[]
  recommendList: any[]
  newAlbumsList: any[]
  rankings: any[]
}

const initialState: IRecommendState = {
  banners: [],
  recommendList: [],
  newAlbumsList: [],
  rankings: []
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
      .addCase(fetchNewAlbumListDataAction.pending, () => {
        console.log('newAlbum-pending')
      })
      .addCase(fetchNewAlbumListDataAction.fulfilled, (state, action) => {
        state.newAlbumsList = action.payload
      })
      .addCase(fetchNewAlbumListDataAction.rejected, () => {
        console.log('newAlbum-rejected')
      })
      .addCase(fetchGetPlayListDetailAction.pending, () => {
        console.log('playListDetail-pending')
      })
      .addCase(fetchGetPlayListDetailAction.fulfilled, (state, action) => {
        state.rankings = action.payload
      })
      .addCase(fetchGetPlayListDetailAction.rejected, () => {
        console.log('playListDetail-rejected')
      })
  }
})

export default recommendSlice.reducer
