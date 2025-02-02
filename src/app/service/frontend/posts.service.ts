import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private JobList = 'http://localhost:8000/job-post/all';  

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<any[]> {
      return this.http.get<any[]>(this.JobList);
    }

}
