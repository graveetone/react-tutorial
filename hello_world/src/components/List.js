import React from 'react'

export default function List() {
    const names = ['Bruce', 'Diana', "Oleh"]
    const nameList = names.map((name) => <h2>{name}</h2>)
  return (
    <div>
        { nameList }
    </div>
  )
}
