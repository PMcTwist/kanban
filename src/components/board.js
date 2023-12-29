import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './column';

export default function Board() {
    const [completed, setCompleted] = useState([]);
    const [incomplete, setIncomplete] = useState([]);


  return (
    <DragDropContext>
        <h2 style={{textAlign: 'center'}}>Kanban Board</h2>

        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row'
            }}
        >

            <Column title={"To Do"} tasks={incomplete} id={1} />

        </div>
    </DragDropContext>
  )
}
