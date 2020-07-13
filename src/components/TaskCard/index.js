import React from 'react';
import Card from 'components/Card'
import {Avatar, Checkbox} from 'antd'
import { UserOutlined } from '@ant-design/icons';

const TaskCard = (props)=>{
    const {task} = props;
    return(
        <Card>
            {task.user && <Avatar size={64} icon={<UserOutlined />} src={task.user.avatar || null} />}
            <h1>{task.description}</h1>
            <span>{task.fecha}</span>
            <Checkbox value={task.completed}></Checkbox>
        </Card>
    );
};

TaskCard.defaultProps = {
    task: {
        user:{
            avatar: "https://api.adorable.io/avatars/224/eduardo.png",
            fullname: "Eduardo Castillo",
        },
        description:"Tarea 1",
        fecha:"2020-06-01",
        completed: false
    }
  };

export default TaskCard;