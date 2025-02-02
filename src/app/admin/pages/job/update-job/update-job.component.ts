import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/service/admin/job.service';
import { snakeToCamel } from 'src/app/utils/snakeToCamel';  // Import the snakeToCamel function

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.scss']
})
export class UpdateJobComponent implements OnInit {

  jobData = {
    id: '',
    jobTitle: '',
    jobDes: '',
    firstName: '',
    lastName: '',
    email: '',
    jobType: '',
    specialisms: '',
    offeredSalary: null,
    careerLevel: '',
    experience: '',
    gender: '',
    industry: '',
    qualification: '',
    applicationDeadlineDate: '',
    country: '',
    city: '',
    completeAddress: '',
    keywords: ''
  };

  jobId!: string;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,  // To fetch job ID from the route
    private router: Router          // To navigate back after updating
  ) { }

  ngOnInit(): void {
    // Get job ID from route parameters
    this.jobId = this.route.snapshot.paramMap.get('id') as string;

    // Fetch job details from the server
    this.jobService.getJobDetails(this.jobId).subscribe(
      (response: any) => {
        // Convert snake_case to camelCase
        this.jobData = snakeToCamel(response.data);  // Fill form with the converted data
      },
      (error: any) => {
        console.error('Error fetching job details:', error);
      }
    );
  }

  // Function to handle form submission for updating the job
  onSubmit(): void {
    // Log the job data to be updated
    console.log('Updated Job Data:', this.jobData);

    // Convert camelCase back to snake_case before submitting to API
    const jobDataInSnakeCase = this.convertToSnakeCase(this.jobData);

    // Call the JobService to update the job details
    this.jobService.updateJob(jobDataInSnakeCase).subscribe(
      (response: any) => {
        console.log('Job successfully updated:', response);
        // Optionally, navigate back to job list or show a success message
        this.router.navigate(['/job/list']);
      },
      (error: any) => {
        console.error('Error updating job:', error);
      }
    );
  }

  // Utility function to convert camelCase back to snake_case
  private convertToSnakeCase(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(this.convertToSnakeCase);
    }
    if (obj !== null && obj.constructor === Object) {
      const newObj: any = {};
      Object.keys(obj).forEach(key => {
        const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
        newObj[snakeKey] = this.convertToSnakeCase(obj[key]);
      });
      return newObj;
    }
    return obj;
  }
}
