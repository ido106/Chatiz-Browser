function submitsingin(data) {

}

export default function Singin() {
    return (
        <form onSubmit={submitsingin} className="boxForms">
        {/* <!-- Email input --> */}
        <div class="form-outline mb-4">
            Username
          <input type="text" id="Username" class="form-control" />
        </div>
      
        {/* <!-- Password input --> */}
        <div class="form-outline mb-4">
            Password
          <input type="password" id="password" class="form-control" />
        </div>
      
        {/* <!-- 2 column grid layout for inline styling --> */}
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            {/* <!-- Checkbox --> */}
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="rememberme" checked />
              <label class="form-check-label" for="rememberme"> Remember me </label>
            </div>
          </div>
      
          <div class="col">
            {/* <!-- Simple link --> */}
            Not register?&nbsp;
            <a href="#!">Click here</a>
            to register
          </div>
        </div>
      
        {/* <!-- Submit button --> */}
        <button type="submit" class="btn btn-primary btn-block">Sign in</button>
      </form>
    )
}