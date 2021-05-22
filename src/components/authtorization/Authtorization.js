export class Authtorization {
  constructor() {
    this.email = ''
    this.password = ''
  }

  toHtml() {
    return `
      <div class="authtorization">
      <div class="authtorization__login-form">
        <input placeholder="Email" type="text">
        <input placeholder="Пароль" type="password">
        <div class="login-form__button-wrap">
          <button class="login-button" type="button">
            Войти
          </button>
          <small>Зарегистрироваться</small>
        </div>
      </div>
      <div class="authtorization__auth-form">
        <input placeholder="Email" type="text">
        <input placeholder="Пароль" type="password">
        <div class="auth-form__button-wrap">
          <button class="auth-button" type="button">
            Зарегистрироваться
          </button>
          <small>Уже есть аккаунт. Войти.</small>
        </div>
      </div>    
    `
  }
}
