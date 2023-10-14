export function drawError(error = '') {
    return `
    <form action="" method='post' >
    <lable>${error}</lable>
    <input type="text" required name="login" />
    <input type="password" required name="password" />
    <input type="submit" value="Зарегестрироваться" />
</form>
`
}
