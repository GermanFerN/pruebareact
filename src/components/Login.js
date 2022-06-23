

function Login () {
    return (
        <>
        <h2> Formulario de Login</h2>
        <form>
            <label>
                <span>Coreeo Electronico</span> <br/>
                 <input type="email" name="email"> </input>
            </label>
            <br/>
            <label>
                <span>Constraseña</span>  <br/>
            <input type="password" name="password"> </input>
            </label>
            <br/>
            <button type="submit"> Ingresar </button>
        </form>
        </>
    );

};

export default Login;
