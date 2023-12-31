import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Task from './task';
import '../css/scroll.css'


const Title = styled.h3`
    padding: 8px;
    background-color: violet;
    text-align: center;
    position: stick;
`;

const TaskList = styled.div`
    padding 3px;
    transition: background-color 0.2s ease;
    background-color: #f4f5f7;
    flex-grow: 1;
    min-height: 100px;
`;

const Container = styled.div`
    background-color: #f4f5f7;
    border-radius: 2.5px;
    width: 300px;
    height: 475px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 1px solid gray;
`;

export default function Column({title, tasks, id}) {
  return (
    <Container className='column'>
        <Title>
            {title}
        </Title>

        <Droppable droppableId={id}>
            {(provided, snapshot) => {
                <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                >
                    <Task
                        task={{ id:69, title: 'finish app build' }}
                        index={1}
                    />

                    {provided.placeholder}
                </TaskList>
            }}
        </Droppable>

    </Container>
  )
}
