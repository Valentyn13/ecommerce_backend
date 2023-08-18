export type UserErrorsNames = 'USER_NOT_FOUND' | 'INCORRECT_PASSWORD';
export type AuthErrorsNames = 'NO_TOKEN' | 'INVALID_TOKEN';

export class CustomError extends Error {
  name: UserErrorsNames | AuthErrorsNames;

  status: number;

  message: string;

  constructor({
    name,
    message,
    status,
  }: {
    name:UserErrorsNames | AuthErrorsNames,
    message: string,
    status: number
  }) {
    super();
    this.name = name;
    this.message = message;
    this.status = status;
  }
}
