import ChatItem from "../chatContent/ChatItem";
import React, { useState } from 'react';


const Main = ({ activeNote, onUpdateNote }) => {

//record stuff here

var mediaRecorder = null;
let audioMessage = null;

let stopRecording = () => {
    if(mediaRecorder !=null) 
        mediaRecorder.stop();    
};

let startRecording = () => {
    navigator.mediaDevices.getUserMedia({audio : true})
    .then(stream => {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        const audioChunks = [];
        mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks);
            audioMessage  = URL.createObjectURL(audioBlob);
            stream.getTracks().forEach(track => track.stop());
        });
    });
};

let sendAudio = (field, value,value2) => {

  value2.push({
    data : audioMessage,
    type: "audio"
  })

onUpdateNote({
  ...activeNote,
  [field]: value,
  lastModified: Date.now(),
  body:"",
  msgChats: value2,
});


};

//record stuff done here


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
    value2.push({
        data : value,
        type: "text"
      })
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


<button type="button" className="btn btn-primary record-button" data-bs-toggle="modal" data-bs-target="#RecordModal">
  Record
</button>
<div className="modal fade" id="RecordModal" tabIndex="-1" aria-labelledby="RecordModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="RecordModalLabel">Audio</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cencel"></button>
      </div>
      <div className="modal-body">
        <button type="button" className="btn btn-success mx-4" onClick={startRecording}> Start record &nbsp; </button>
        <button type="button" className="btn btn-danger mx-4" onClick={stopRecording}> Stop record </button>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary mx-3" data-bs-dismiss="modal">Cencel</button>
        <button type="button" className="btn btn-primary" onClick={() => sendAudio("newMsg", activeNote.body,activeNote.msgChats)}>Send</button>
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
                  type={itm.type}
                  animationDelay={index + 2}
                  key={index}
                  user={chatItmExample.type ? chatItmExample.type : "me"}
                  msg={itm.data}
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
