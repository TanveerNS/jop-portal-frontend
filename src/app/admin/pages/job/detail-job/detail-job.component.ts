import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/service/admin/job.service';

@Component({
  selector: 'app-detail-job',
  templateUrl: './detail-job.component.html',
  styleUrls: ['./detail-job.component.scss']
})
export class DetailJobComponent implements OnInit {

  job: any;  // Object to hold the job details
  jobId!: string;  // Store the job ID from the route

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute  // Inject ActivatedRoute to access the route params
  ) { }

  ngOnInit(): void {
    // Get the job ID from the route parameters
    this.jobId = this.route.snapshot.paramMap.get('id') as string;
    
    // Fetch the job details from the API
    this.jobService.getJobDetails(this.jobId).subscribe(
      (response:any) => {
        this.job = response.data;  // Store the response data in the job variable
        console.log('Job Details:', this.job);
      },
      (error) => {
        console.error('Error fetching job details:', error);
      }
    );
  }

}
