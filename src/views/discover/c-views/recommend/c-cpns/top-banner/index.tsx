import { useAppSelector } from '@/store/hooks/useApp'
import React, { ElementRef, FC, memo, ReactNode, useRef, useState } from 'react'
import { shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import {
  TopBannerWrapper,
  TopBannerLeft,
  TopBannerRight,
  TopBannerControl
} from './style'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  // get data from store
  const selector = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  const handleAfterChange = (current: number) => {
    setCurrentIndex(current)
  }

  // handle click
  const handlePreClick = () => {
    console.log('pre')
    bannerRef.current?.prev()
  }

  const handleNextClick = () => {
    console.log('next')
    bannerRef.current?.next()
  }

  /** 获取背景图片 */
  let bgImageUrl
  if (currentIndex >= 0 && selector.banners.length > 0) {
    bgImageUrl =
      selector.banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }

  return (
    <TopBannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`
      }}
    >
      <div className="banner">
        <TopBannerLeft>
          <Carousel
            autoplay
            autoplaySpeed={2000}
            ref={bannerRef}
            dots={false}
            effect="fade"
            afterChange={handleAfterChange}
          >
            {selector.banners.map((item) => {
              return (
                <div key={item.imageUrl} className="banner-item">
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {selector.banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: currentIndex === index
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </TopBannerLeft>
        <TopBannerRight></TopBannerRight>
        <TopBannerControl>
          <button className="left btn" onClick={handlePreClick}></button>
          <button className="right btn" onClick={handleNextClick}></button>
        </TopBannerControl>
      </div>
    </TopBannerWrapper>
  )
}

export default memo(TopBanner)
