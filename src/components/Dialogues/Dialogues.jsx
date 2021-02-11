import s from './Dialogues.module.css'


const Dialogues = (props) => {
    return (
        <div className={s.dialogues}>
            <div className={s.dialogItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    Marta
                </div>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={`${s.dialog} ${s.active}`}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Nastya
                </div>
                <div className={s.dialog}>
                    Pasha
                </div>
                <div className={s.dialog}>
                    Marina
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogues