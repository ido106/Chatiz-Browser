class DataBase {
    constructor(props) {
        super(props);
        this.state = {
            numberOfUsers : 0,
            Users : []
        }
    }

    addUser(param) {
        this.setState({numberOfUsers : numberOfUsers+1});
        Users.push(param)
    }

    getUserByName(userName) {
        this.Users.forEach(element => {
            if(element.state.name == userName) {
                return element;
            }
        });
        return null;
    }
}