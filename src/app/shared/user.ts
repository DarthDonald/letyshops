export class User {
  private _email: string;
  private _password: string;

  constructor(user: any) {
    this._email = user.email;
    this._password = user.password;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }
}
