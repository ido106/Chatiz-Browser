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


<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>




        <button onClick={() => onClickEditField("newMsg", activeNote.body,activeNote.msgChats)}>send!</button>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">
        <div className="chat__items">
            {activeNote.msgChats.map((itm, index) => {
              return (
                <ChatItem
                  type={"text"}
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
