import React, { FC, memo, ReactNode, useEffect } from 'react'
import { useAppDispatch } from '@/store/hooks/useApp'
import HotRecommend from './c-cpns/hot-recommend'
import TopBanner from './c-cpns/top-banner'
import {
  fetchBannerDataAction,
  fetchRecommendListDataAction
} from './store/recommend'
import { RecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // dispatch action
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchRecommendListDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content">
        <div className="left">
          <HotRecommend />
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
