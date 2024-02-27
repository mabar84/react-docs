import React, {useState} from 'react';

const ReactingToInputWithState = () => {
    return (
        <div>
            <Picture/>
        </div>
    );
};

export default ReactingToInputWithState;


function Picture() {

    const [isDivActiveElement, setDivIsActiveElement] = useState(true)

    const onClickClassToggleHandler = () => {
        setDivIsActiveElement(prev => !prev)

    }

    return (
        <div onClick={onClickClassToggleHandler}
             className={'background' + (isDivActiveElement ? ' background--active' : '')}>
            <img
                className={`picture ${!isDivActiveElement && 'picture--active'}`}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
            />
        </div>
    );
}
