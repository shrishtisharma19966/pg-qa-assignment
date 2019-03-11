import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  validateUser(token: string): boolean {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    return token === 'pag4nt1stoken';
  }
}
