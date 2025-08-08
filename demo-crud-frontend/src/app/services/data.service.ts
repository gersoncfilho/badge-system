import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError, Observable, retry, tap, throwError} from 'rxjs';
import {User} from '../model/User'
import {PaginatedResponse} from '../model/UserData';
import {ToastService} from './toast.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = "http://localhost:9090/api/users";

  constructor(private http: HttpClient, private toastService: ToastService) { }

  getAllUsers(page: number = 1, pageSize: number = 20): Observable<PaginatedResponse> {
    const effectivePage = page || 1;
    const effectivePageSize = pageSize || 20;

    const params = new HttpParams()
      .set('page', effectivePage.toString())
      .set('pageSize', effectivePageSize.toString());

    return this.http.get<PaginatedResponse>(this.apiUrl, { params })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/delete/${id}`)
      .pipe(
        tap(_ => {
          this.toastService.show('Usuário deletado com sucesso!', 'success')
        }),
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
