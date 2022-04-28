import {React} from "react"
import {Date} from 'react'

const idoMsgs = [
    {
        type : "text",
        data : "im idiot",
        timeSent : "",
        isMine : true
    },

    {
        type : "text",
        data : "realy man",
        timeSent : "",
        isMine : true
    },
    
    {
        type : "text",
        data : "im dumb",
        timeSent : "",
        isMine : true
    }
]

const userMessage = [
    {
        user : "otma",
        contacts: [{
                name :"ido",
                messages: idoMsgs,
                img: "https://bootdey.com/img/Content/avatar/avatar1.png",
                lastSeen: "",
            } ,
            {
                name : "Shahar" ,
                messages: idoMsgs,
                img: "https://bootdey.com/img/Content/avatar/avatar1.png",
                lastSeen: "",
            
            }
        ]
    },

    {
        user : 'shahar',
        contacts: [],
        lastSeen: "",
        img: "https://bootdey.com/img/Content/avatar/avatar1.png"

    },

    {
        user : 'ido',
        contacts: [],
        lastSeen: "",
        img: "https://bootdey.com/img/Content/avatar/avatar1.png"    },

]

export default userMessage