import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    done.sort((a, b) => b.finishDate - a.finishDate)

   
    active.sort((a, b) => {
        a = a.text.toLowerCase();
        b = b.text.toLowerCase();
        if (a < b) return -1;
        if (a > b) return 1;
        return 0
    })


    const activetasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const donetasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <>
            <div className="active">
                <h1>Zadania do zrobienia</h1>
                {activetasks.length > 0 ? activetasks : <p>brak zadań</p>}
            </div>
            <div className="done">
                <h3>Zadania zrobione <em>({done.length})</em></h3>
                {done.length > 5 && <span style={{ fontSize: 10 }}>wyświetlonych jest jedynie 5 ostatnich elementów</span>}
                {donetasks.slice(0, 5)}
            </div>
        </>
    );
}

export default TaskList;