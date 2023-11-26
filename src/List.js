import React from 'react'
import ListItem from './ListItem'
const List = ({items}) => {
  return (
    <table>
        {items.map(item=> (
            <ListItem key={item.id} item = {item}/>
        ))}
    </table>
  )
}

export default List