import React, { FC, memo, ReactNode } from 'react'
import { MenuItemWrapper } from './style'
import { getImageSize } from '@/utils/format'
import { formatCount } from '../../utils/format'

interface IProps {
  children?: ReactNode
  itemData: any
}

const SongMenu: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />

        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="headset sprite_icon"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="play sprite_icon"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenu)
