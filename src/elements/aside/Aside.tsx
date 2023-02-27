import React from 'react'
import { AsideProps } from './Aside.types'

export default function Aside({ children }: AsideProps) {
    return (<aside>{children}</aside>)
}