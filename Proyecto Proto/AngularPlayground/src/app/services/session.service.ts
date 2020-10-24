import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private static loggedUser: string;

  private static userType: number;

  static setLoggedUser(username: string): void {
    this.loggedUser = username;
  }
  static setUserType(userType: number): void {
    this.userType = userType;
  }

  static getUserType(): number {
      return SessionService.userType;
  }

  static getLoggedUser(): string {
    return SessionService.loggedUser;
  }

}
