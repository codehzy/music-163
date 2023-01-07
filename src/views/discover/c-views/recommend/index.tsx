import React, { FC, memo, ReactNode, useEffect } from 'react'
import { useAppDispatch } from '../../../../store/hooks/useApp'
import TopBanner from './c-cpns/top-banner'
import { fetchBannerDataAction } from './store/recommend'
import { RecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // dispatch action
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
    </RecommendWrapper>
  )
}

export default memo(Recommend)
