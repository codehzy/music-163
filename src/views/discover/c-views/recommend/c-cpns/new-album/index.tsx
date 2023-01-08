import { Carousel } from 'antd'

import AreaHeader from '@/components/area-header'
import React, { ElementRef, FC, memo, ReactNode, useRef } from 'react'
import { AlbumWrapper } from './style'
import { useAppSelector } from '@/store/hooks/useApp'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const handlePrevClick = () => {
    bannerRef.current?.prev()
    console.log('prev')
  }
  const handleNextClick = () => {
    bannerRef.current?.next()
    console.log('next')
  }

  const selector = useAppSelector((state) => {
    return {
      newAlbumList: state.recommend.newAlbumsList
    }
  })

  return (
    <AlbumWrapper>
      <AreaHeader title="新碟上架" moreLink="/discover/album"></AreaHeader>
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel dots={false} speed={1500} ref={bannerRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {selector.newAlbumList
                      .slice(item * 5, (item + 1) * 5)
                      .map((album) => {
                        return <NewAlbumItem key={album.id} itemData={album} />
                      })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={handleNextClick}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
