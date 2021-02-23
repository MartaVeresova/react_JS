import React from "react";
import s from './Dialogues.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogues = (props) => {

    let dialoguesElements = props.dialoguesPage.dialogues.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialoguesPage.messages.map(m => <Message message={m.message}/>)

    let newAddMessage = React.createRef()

    let addMessage = () => {
        let text = newAddMessage.current.value
        props.addMessage(text)
    }

    let onMessageChange = () => {
        let text = newAddMessage.current.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialogItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.textareaBlock}>
                    <textarea
                        onChange={onMessageChange}
                        ref={newAddMessage}
                        value={props.newMessageText}
                    />
                </div>
                <div className={s.buttonBlock}>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogues
