import React from "react";
function InputMessage({ value, onChange, onSend }) {

    const sendMessageOnEnter = (event) => {
        if (event.key === 'Enter') {
            onSend();
        }
    };

    return (
        <div className="chat-window-input">
            <input
                type="text"
                placeholder="Введите сообщение"
                value={value}
                onChange={onChange}
                onKeyDown={sendMessageOnEnter}
            />
            <button onClick={onSend}>Отправить</button>
        </div>
    );
}
export default InputMessage;