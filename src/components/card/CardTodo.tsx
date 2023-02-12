import React from 'react'
import Card from '../Card'

type Props = {title: string
description?: string
numberOfTask?: number
date: string
}

const CardTodo = ({title, description, numberOfTask: numberOfTasks, date}: Props) => {
  return (
    <Card>
    <div className='flex justify-between'>
        <h2>{title}</h2>
        <small>{date}</small>
    </div>
    <div>
        { description ? <p className='line-clamp-2 md:line-clamp-4 lg:line-clamp-5'>{description}</p> : null}
        <h4>Tasks: <span>{numberOfTasks ? numberOfTasks : 0}</span></h4>
    </div>
    </Card>
  )
}

export default CardTodo