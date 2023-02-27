import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Pages from 'src/pages'

export default function _Routes({ }) {
    return (
        <Routes>
            <Route path="/" element={<Pages />} />
        </Routes>
    )
}

