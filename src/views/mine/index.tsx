import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = () => {
  return <div>Mine</div>
}

export default memo(Mine)
