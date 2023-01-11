import React, { FC, memo, ReactNode, useEffect } from 'react'
import { useAppDispatch } from '@/store/hooks/useApp'
import HotRecommend from './c-cpns/hot-recommend'
import TopBanner from './c-cpns/top-banner'
import {
  fetchBannerDataAction,
  fetchNewAlbumListDataAction,
  fetchRecommendListDataAction,
  fetchGetPlayListDetailAction
} from './store/recommend'
import { RecommendWrapper } from './style'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'

interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  // dispatch action
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchRecommendListDataAction())
    dispatch(fetchNewAlbumListDataAction())
    dispatch(fetchGetPlayListDetailAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
