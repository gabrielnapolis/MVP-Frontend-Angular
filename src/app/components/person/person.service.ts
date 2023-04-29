import { Person } from './person.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PersonService {
  baseUrl = "http://127.0.0.1:5000/pessoa";
  baseUrl2 = "http://127.0.0.1:5000/pessoas";
  //baseUrl2 = "http://localhost:3001/pessoas";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ["msg-success"],
    });
  }

  create(person: Person): Observable<Person>{
    return this.http.post<Person>(this.baseUrl, person)
  }

  read(): Observable<Person[]>{
    return this.http.get<Person[]>(this.baseUrl2)
  }
}
