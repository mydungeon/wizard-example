import React from 'react'
import { MainProps } from './Main.types'

export default function Main({children}:MainProps) {
    return (<div className="main">{children}</div>)
}