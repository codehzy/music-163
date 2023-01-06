import React, { FC, memo, ReactNode, useEffect, useState } from 'react'
import hzyRequest from '@/service'

interface IProps {
  children?: ReactNode
}

type IBannerType = {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = () => {
  const [bannerList, setBannerList] = useState<IBannerType[]>([])
  useEffect(() => {
    hzyRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBannerList(res.banners)
      })
  }, [])

  return (
    <div>
      {bannerList.map((item) => {
        return <div key={item.imageUrl}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Recommend)
