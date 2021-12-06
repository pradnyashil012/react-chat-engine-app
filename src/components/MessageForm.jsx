import React, { useState } from "react";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
  const [state, setstate] = useState("");
  const {chatId, creds} = props;

  const handleChange = (e) => {
    setstate(e.target.value);
    isTyping(props, chatId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = state.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setstate("");
  };

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: " " });
  };

  return (
    <div className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-form"
        placeholder="Send a message..."
        value={state}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </div>
  );
};

export default MessageForm;
