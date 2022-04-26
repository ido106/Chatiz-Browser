import ChatItem from "../chatContent/ChatItem";
import React, { useState } from 'react';
const Main = ({ activeNote, onUpdateNote }) => {
  const chatItmExample = 
    {
      key: 1,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    };
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };
  const onClickEditField = (field, value,value2) => {
    value2.push(value)
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
      body:"",
      msgChats: value2,
    });
  };
  if (!activeNote) return <div className="no-active-note">No Active Chat</div>;
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="contact user"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />
        <input
          id="body"
          placeholder="Write your massage here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
        <button onClick={() => onClickEditField("newMsg", activeNote.body,activeNote.msgChats)}>send!</button>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">
        <div className="chat__items">
            {activeNote.msgChats.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={chatItmExample.key}
                  user={chatItmExample.type ? chatItmExample.type : "me"}
                  msg={itm}
                  image={chatItmExample.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
