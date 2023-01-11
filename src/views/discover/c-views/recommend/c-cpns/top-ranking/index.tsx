import AreaHeader from '@/components/area-header'
import { useAppSelector } from '@/store/hooks/useApp'
import React, { FC, memo, ReactNode } from 'react'
import TopRankingItem from '../top-ranking-item'
import { RankingWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rankings } = useAppSelector((state) => {
    return {
      rankings: state.recommend.rankings
    }
  })

  console.log('rankings', rankings)

  return (
    <RankingWrapper>
      <AreaHeader title="榜单" moreLink="/discover/ranking"></AreaHeader>
      <div className="content">
        {rankings.map((item, index) => {
          return <TopRankingItem key={index} itemData={item.playlist} />
        })}
      </div>
    </RankingWrapper>
  )
}

export default memo(TopRanking)
