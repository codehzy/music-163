import React, { FC, memo, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = () => {
  return <div>Download</div>
}

export default memo(Download)
