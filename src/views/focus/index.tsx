import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Focus: FC<IProps> = () => {
  return <div>Focus</div>
}

export default memo(Focus)
