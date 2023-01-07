import AreaHeader from '@/components/area-header'
import { useAppSelector } from '@/store/hooks/useApp'
import React, { FC, memo, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import { shallowEqual } from 'react-redux'
import SongMenuItem from '@/components/song-menu-item'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const selector = useAppSelector((state) => {
    return {
      hotRecommends: state.recommend.recommendList
    }
  }, shallowEqual)

  return (
    <RecommendWrapper>
      <AreaHeader
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子', '舞曲']}
        moreLink="/discover/songs"
      ></AreaHeader>

      <div className="recommend-list">
        {selector.hotRecommends.map((item) => {
          return <SongMenuItem key={item.id} itemData={item} />
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
