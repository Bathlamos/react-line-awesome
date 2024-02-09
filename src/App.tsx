import React, { useState } from 'react'
import * as Icons from '../'
import { IconProps } from '../'
import './App.css'

const sizes: IconProps['size'][] = [
  'xs',
  'sm',
  'fw',
  'lx',
  '1x',
  'lg',
  '2x',
  '3x',
  '4x',
  '5x',
  '6x',
  '7x',
  '8x',
  '9x',
  '10x',
]

const App = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <input value={search} onChange={e => setSearch(e.target.value)} />
      {Object.entries(Icons)
        .filter(([name]) => name.toLowerCase().includes(search.toLowerCase()))
        .flatMap(([name, Icon]) => (
          <div key={name} className="Row">
            {sizes.map(size => (
              <Icon size={size} />
            ))}
          </div>
        ))}
    </div>
  )
}

export default App
