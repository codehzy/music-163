import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return <div>Recommend</div>
}

export default memo(Recommend)
