import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class PolicyInfoService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  public getPolicyInfoData(): Observable<any> {
    return this.http.get(this.url + '/api/getPolicyInfo');
  }

  public getPolicyReportInfo(): Observable<any> {
    return this.http.get(this.url + '/api/getPolicyReportInfo');
  }
}
