import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private AddJob = 'http://localhost:8000/job-post';  // API endpoint
  private JobList = 'http://localhost:8000/job-post/all';  // API endpoint to fetch all jobs
  private DeleteJob = 'http://localhost:8000/job-post';  // Base URL for job posts
  private apiUrl = 'http://localhost:8000/job-post';  // Base URL for job posts


  constructor(private http: HttpClient) { }

  // Method to post job data to the API
  postJobData(jobData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.AddJob, jobData, { headers });
  }

  getAllJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.JobList);
  }

  deleteJob(jobId: number): Observable<void> {
    return this.http.delete<void>(`${this.DeleteJob}?id=${jobId}`);
  }

  getJobDetails(jobId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?id=${jobId}`);
  }

  updateJob(jobData: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, jobData, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

}
