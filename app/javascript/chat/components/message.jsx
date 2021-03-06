import React from 'react';
import { emojify } from 'react-emojione';

// function strToRGB(str) {
//   if (str && str.length > 0) {
//     let hash = 0;
//     for (let i = 0; i < str.length; i += 1) {
//       hash = str.charCodeAt(i) + ((hash << 6) - hash);
//     }
//     const c = (hash & 0x00FFFFFF)
//       .toString(16)
//       .toUpperCase();
//     return `#${"00000".substring(0, 6 - c.length)}${c}`;
//   }
// }

const options = {
    convertShortnames: true,
    convertUnicode: true,
    convertAscii: true,
    style: {
        backgroundImage: 'url("/path/to/your/emojione.sprites.png")',
        height: 32,
        margin: 4,
    },
    // this click handler will be set on every emoji
    onClick: event => alert(event.target.title)
};

const Message = (props) => {
  const { created_at, author, content, avatar, nickname } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <div className="message-container-avatar">
        { avatar ? <img src={avatar} className="avatar-square" /> : <img src='https://avatars.githubusercontent.com/github' className="avatar-square" /> }
      </div>
        <div className="message-container-inner">
        {nickname ? <span>{nickname}</span> : <span>{author}</span>}
          <i className="author">
          <small>{time}</small>
          </i>
          <p>{emojify(content)}</p>
        </div>
    </div>
  );
};

export default Message;
