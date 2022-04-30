import react from 'react'

export default function time() {
    var date = new Date();
    let min = date.getMinutes().toString();
    let hours = date.getHours().toString();
    let days = date.getDate().toString();
    if (date.getHours() < 10) {
        hours = "0" + hours;
    }

    if (date.getMinutes() < 10) {
        min = "0" + min;
    }

    return hours + ":" + min;

}