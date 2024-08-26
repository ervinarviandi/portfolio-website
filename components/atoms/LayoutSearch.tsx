import React from 'react'
import ToggleSearch from './ToggleSearch'
import {CommandSearch} from './CommandSearch'

const LayoutSearch = () => {
  return (
    <div className='flex items-center'>
        <ToggleSearch/>
        {/* <CommandSearch/> */}
    </div>
  )
}

export default LayoutSearch