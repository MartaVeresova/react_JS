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

    let dialogues = [
        {id: 1, name: 'Marta'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Nastya'},
        {id: 5, name: 'Pasha'},
        {id: 6, name: 'Marina'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'}
    ]

    let dialoguesElements = dialogues.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements=messages.map(m=> <Message message={m.message} />)

    return (
        <div className={s.dialogues}>
            <div className={s.dialogItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogues
