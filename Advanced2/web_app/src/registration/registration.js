function Registration() {
    return (
<div container>
    <div class="mb-3 row">
        <label for="Username" class="col-form-label">Username</label>
        <div class="col-sm-3">
            <input class="form-control" id="Username" placeholder="Israel Israeli"></input>
        </div>
    </div>
    <div class="mb-3 row">
        <label for="inputPassword" class="col-form-label">Password</label>
        <div class="col-sm-3">
            <input type="password" class="form-control" id="inputPassword"></input>
        </div>
    </div>
</div>
    );
}

export default Registration