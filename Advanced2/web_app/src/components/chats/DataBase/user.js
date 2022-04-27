import {useState} from 'react';
import Message from './message'

export default class User {
    constructor(props) {
            this.userName = props.name;
            this.messages = [];
    }

    addMessage(param) {
        this.messages.push(
        <Message {...param}/>
        )
    }
}