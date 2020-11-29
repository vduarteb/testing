import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import Like from '../like'

let container;

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    act(() => {
        ReactDOM.render(
            <Like />,
            container
        )
    })
})

afterEach(() => {
    document.body.removeChild(container)
    container = null
})

describe("Testing Like component", () => {
    it('Default likes number is 0', () => {
        const p = container.querySelector('p')
        expect(p.textContent).toBe('Likes: 0')
    })
    
    it('Increases likes when Like button is clicked', () => {
        const button = container.querySelector('#increment')
        const p = container.querySelector('p')
        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })
    
        expect(p.textContent).toBe('Likes: 1')
    })
    
    it('Decreases likes when Dislike button is clicked', () => {
        const button = container.querySelector('#decrement')
        const p = container.querySelector('p')
        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })
    
        expect(p.textContent).toBe('Likes: -1')
    })
});