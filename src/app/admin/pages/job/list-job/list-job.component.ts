import { Component } from '@angular/core';
import { JobService } from 'src/app/service/admin/job.service';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.scss']
})
export class ListJobComponent  {

  jobs: any[] = [];  // Array to hold job data

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    // Fetch all jobs when the component initializes
    this.jobService.getAllJobs().subscribe(
      (response:any) => {
        let list = response.data
        this.jobs = list;
        console.log('Jobs fetched:', this.jobs);
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );
  }
  onDelete(jobId: number): void {
    if (confirm('Are you sure you want to delete this job?')) {
      // Call the service to delete the job (Assuming you have a delete API)
      this.jobService.deleteJob(jobId).subscribe(
        () => {
          // Remove the job from the list after successful deletion
          this.jobs = this.jobs.filter(job => job.id !== jobId);
          console.log('Job deleted successfully');
        },
        (error) => {
          console.error('Error deleting job:', error);
        }
      );
    }
  }
}
