import ChatItem from "../chatContent/ChatItem";
import React, { useState } from 'react';
const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };
  const onClickEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
      body:"",
    });
  };
  if (!activeNote) return <div className="no-active-note">No Active Note</div>;
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Note Title"
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
        <button onClick={() => onClickEditField("newMsg", activeNote.body)}>send!</button>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">
          {activeNote.newMsg}
        </div>
      </div>
    </div>
  );
};

export default Main;
