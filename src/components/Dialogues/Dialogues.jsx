import React from "react";
import s from './Dialogues.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogues = (props) => {

    let dialoguesElements = props.state.dialogues.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newAddMessage = React.createRef()

    let addMessage = () => {
        let text = newAddMessage.current.value
        props.addMessage(text)
        newAddMessage.current.value=''
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialogItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.textareaBlock}>
                    <textarea ref={newAddMessage}></textarea>
                </div>
                <div className={s.buttonBlock}>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogues
