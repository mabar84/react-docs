import {useRef, useState} from "react";


// Challenge 1 of 4: Fix a broken chat input
// Type a message and click “Send”. You will notice there is a three second delay before you see the “Sent!” alert. During this delay, you can see an “Undo” button. Click it. This “Undo” button is supposed to stop the “Sent!” message from appearing. It does this by calling clearTimeout for the timeout ID saved during handleSend. However, even after “Undo” is clicked, the “Sent!” message still appears. Find why it doesn’t work, and fix it.
export function Chat() {
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [timeoutID, setTimeoutID] = useState(null);

    function handleSend() {
        setIsSending(true);
        setTimeoutID(setTimeout(() => {
            alert('Sent!');
            setIsSending(false);
        }, 1500))
    }

    function handleUndo() {
        setIsSending(false);
        clearTimeout(timeoutID);
    }

    return (
        <>
            <input
                disabled={isSending}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                disabled={isSending}
                onClick={handleSend}>
                {isSending ? 'Sending...' : 'Send'}
            </button>
            {isSending &&
                <button onClick={handleUndo}>
                    Undo
                </button>
            }
        </>
    );
}

//////////////////////////////

export function Toggle() {
    // const isOnRef = useRef(false);
    const [isOnRef, setIsOnRef] = useState(false)
    return (
        <button onClick={() => {
            setIsOnRef(!isOnRef)
            // isOnRef.current = !isOnRef.current;
        }}>
            {isOnRef ? 'On' : 'Off'}
            {/*{isOnRef.current ? 'On' : 'Off'}*/}
        </button>
    );
}

//////////////////////////////

function DebouncedButton({onClick, children}) {
    let timeoutID;

    return (
        <button onClick={() => {
            clearTimeout(timeoutID);
            timeoutID = setTimeout(() => {
                onClick();
            }, 1000);
        }}>
            {children}
        </button>
    );
}

export function Dashboard() {
    return (
        <>
            <DebouncedButton
                onClick={() => alert('Spaceship launched!')}
            >
                Launch the spaceship
            </DebouncedButton>
            <DebouncedButton
                onClick={() => alert('Soup boiled!')}
            >
                Boil the soup
            </DebouncedButton>
            <DebouncedButton
                onClick={() => alert('Lullaby sung!')}
            >
                Sing a lullaby
            </DebouncedButton>
        </>
    )
}

//////////////////////////////


export function Chat4() {
    // const [text, setText] = useState('');
    const inputRef = useRef(null);

    function handleSend() {
        // console.log(input.)

        // setTimeout(() => {
        //     alert('Sending: ' + text);
        // }, 3000);
        setTimeout(() => {
            alert('Sending: ' + inputRef.current.value);
        }, 3000);
    }

    return (
        <>
            <input
                ref={inputRef}
                // value={text}
                // onChange={e => setText(e.target.value)}
            />
            <button
                onClick={handleSend}>
                Send
            </button>
        </>
    );
}

//////////////////////////////
export const RefereningValuesWithRefs = () => {
    return <>
        <div>1</div>
        <Chat/>
        <div>2</div>
        <Toggle/>
        <div>3</div>
        <Dashboard/>
        <div>4</div>
        <Chat4/>
    </>
}
// RefereningValuesWithRefs