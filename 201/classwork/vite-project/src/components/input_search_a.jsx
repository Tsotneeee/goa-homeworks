import { useState } from 'react'
import InputSearch from './input_search'

function InputSearchA() {
    const [search, setSearch] = useState('')
    const fruits = [['Apple', 'Banana', 'Cherry'],['red','yellow','red']]


  return (
    <>
      <InputSearch setSearch={setSearch} search={search} />
    </>
  )
}

export default InputSearchA