import React, {useState} from 'react';
import TaskCard from 'components/TaskCard'
const Tasks = () => {
    const [tasks, setTasks] = useState([ {
        user:{
            avatar: "https://api.adorable.io/avatars/224/eduardo.png",
            fullname: "Eduardo Castillo",
        },
        description:"Tarea 1",
        fecha:"2020-06-01",
        completed: false
    },  {
        user:{
            avatar: "https://api.adorable.io/avatars/224/eduardo.png",
            fullname: "Eduardo Castillo",
        },
        description:"Tarea 2",
        fecha:"2020-06-01",
        completed: false
    },  {
        user:{
            avatar: "https://api.adorable.io/avatars/224/eduardo.png",
            fullname: "Eduardo Castillo",
        },
        description:"Tarea 3",
        fecha:"2020-06-01",
        completed: false
    }
])
    return(
        <>
        Hi
        {
            tasks.map(
                task =>  <TaskCard task={task}/>
            )
        }
        </>
    );
};

export default Tasks;