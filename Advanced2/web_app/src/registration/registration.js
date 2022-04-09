function handleSubmit(data) {
    console.log(data) // trying to see what format data comes at
    // check validity and save user details somewhere
}

function Registration() {
    return (
        <form onSubmit={handleSubmit}>
            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
                <input type="text" id="Username" className="form-control"></input>
                <label className="form-label" for="Username">Username</label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
                <input type="password" id="Password" className="form-control"></input>
                <label className="form-label" for="Password">Password</label>
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}
            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="checkBoxRemember"></input>
                        <label className="form-check-label" for="checkBoxRemember"> Remember me </label>
                    </div>
                </div>

                <div className="col">
                    {/* <!-- Simple link --> */}
                    <a href="#!">Forgot password?</a>
                </div>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-primary btn-block">Sign in</button>
        </form>
    );
}

export default Registration