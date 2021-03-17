import React from 'react';


export function InitialsAvatar(props) {
    const { letter, rounded } = props;
    function getFirstTwoLetters() {
        const strArr = letter.split(" ");
        let letterToReturn = [];
        if (strArr.length >= 2) {
            letterToReturn.push(strArr[0].charAt(0));
            letterToReturn.push(strArr[1].charAt(0));
        } else {
            letterToReturn.push(strArr[0].charAt(0));
            letterToReturn.push(strArr[0].charAt(1));
        }
        return letterToReturn.join("");
    }
    return (
        <div {...props} style={{
            backgroundColor: `#4EA9BE`,
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            borderRadius: rounded  ? '50px' : '5px',
        }}>
            <h2 style={{ fontSize: '16px', margin: '0', color: 'white'}}>{getFirstTwoLetters()}</h2>
        </div >
    )
}