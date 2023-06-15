import React from 'react'
import TodoPage from './TodoPage'

export default function TodoPages() {
    return (
        <div className = "todoPages">
            <ul>
                <li><TodoPage /></li>
                <li><TodoPage /></li>
                <li><TodoPage /></li>
                <li><TodoPage /></li>
            </ul>
        </div>
    )
}
