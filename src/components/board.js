import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

export default function board() {
    const [completed, setCompleted] = useState([]);
    const [incomplete, setIncomplete] = useState([]);


  return (
    <DragDropContext>
        <h2 style={{textAlign: 'center'}}>Kanban Board</h2>

        <div
            style={
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row'
            }
        >

        </div>
    </DragDropContext>
  )
}
