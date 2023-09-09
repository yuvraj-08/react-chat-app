import React from "react";

function RightChatBubble({ message, name, image }) {
  return (
    <>
      <div className="message-bubble mbr">
        <img src="https://media.licdn.com/dms/image/C5603AQGcQVVXlXJtKA/profile-displayphoto-shrink_800_800/0/1651473013942?e=2147483647&v=beta&t=xRtCbueE4_K3HvITYKB5DB3i4ZJyD1SWalQf0Uh7D-Y" style={styles.avatar} alt="sender-pic" />{" "}
        <div className="right-bubble ">
          <div className="text-message">
            <p className="name right-name">{name}</p>
            <p className="message">{message.text}</p>
            <span className="message-timestamp">{message.timestamp}</span>
          </div>
          <div className="bubble-arrow bubble-arrow-alt"></div>
        </div>
      </div>
    </>
  );
}
const styles = {
  avatar: {
    width: "49px",
    height: "49px",
    borderRadius: "50%",
    margin: "0 10px",
  },
};
export default RightChatBubble;