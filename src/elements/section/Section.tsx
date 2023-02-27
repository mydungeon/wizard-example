import React from 'react'
import { SectionProps } from './Section.types'

export default function Section({children}:SectionProps) {
    return (<section>{children}</section>)
}