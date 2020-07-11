import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class PaymentTrackerService {

  constructor(private http: HttpClient) {
  }

  public getPolicyInfoData(): Observable<any> {
    return this.http.get('http://localhost:3000/api/getPolicyInfo');
  }
}
