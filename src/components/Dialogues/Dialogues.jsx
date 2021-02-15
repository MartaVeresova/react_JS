import s from './Dialogues.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogues/' + props.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogues = (props) => {

    let dialoguesData = [
        {id: 1, name: 'Marta'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Nastya'},
        {id: 5, name: 'Pasha'},
        {id: 6, name: 'Marina'}
    ]

    let messagesData = [
        {id: 1, name: 'Hi'},
        {id: 2, name: 'How are you?'},
        {id: 3, name: 'Yo'}
    ]

    return (
        <div className={s.dialogues}>
            <div className={s.dialogItems}>
                <DialogItem name={dialoguesData[0].name} id={dialoguesData[0].id} />
                <DialogItem name={dialoguesData[1].name} id={dialoguesData[1].id} />
                <DialogItem name={dialoguesData[2].name} id={dialoguesData[2].id} />
                <DialogItem name={dialoguesData[3].name} id={dialoguesData[3].id} />
                <DialogItem name={dialoguesData[4].name} id={dialoguesData[4].id} />
                <DialogItem name={dialoguesData[5].name} id={dialoguesData[5].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].name} />
                <Message message={messagesData[1].name} />
                <Message message={messagesData[2].name} />
            </div>
        </div>
    )
}

export default Dialogues
