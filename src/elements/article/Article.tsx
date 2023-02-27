import React from 'react'
import { ArticleProps } from './Article.types'

export default function Article({ children }: ArticleProps) {
    return (<article>{children}</article>)
}