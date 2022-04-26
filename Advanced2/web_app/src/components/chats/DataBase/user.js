class User {
    constructor(props) {
        super(props);
        this.state = {
            name : props.name,
            messages : []
        }
    }

    addMessage(message) {
        this.messages.push(message)
    }
}