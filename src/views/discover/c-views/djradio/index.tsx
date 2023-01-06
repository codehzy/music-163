import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DjRadio: FC<IProps> = () => {
  return <div>DjRadio</div>
}

export default memo(DjRadio)
