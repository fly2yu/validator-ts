export class ValidatorError {
  private message: string
  private reason: string
  constructor ( reason: string, message: string = 'Bad Request') {
    this.reason = reason
    this.message = message
  }
}
