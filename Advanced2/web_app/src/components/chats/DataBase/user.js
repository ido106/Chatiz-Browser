class User {
    constructor(props) {
        super(props);
        this.state = {
            name : props.name,
            messages : []
        }
    }

    addMessage(param) {
        this.messages.push(param.message)
    }
}