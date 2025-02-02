import { Component } from '@angular/core';
import { JobService } from '../../../../service/admin/job.service';  // Import JobService

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent {

  // Data model to hold form values
  jobData = {
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

  constructor(private jobService: JobService) { }

  // Function to handle form submission
  onSubmit() {
    // Log the job data (You could send it to a server or service here)
    console.log('Job Data Submitted:', this.jobData);

    // Ensure the applicationDeadlineDate is in the correct format
    if (this.jobData.applicationDeadlineDate) {
      this.jobData.applicationDeadlineDate = this.formatDateToISO(this.jobData.applicationDeadlineDate);
    }

    // Transform the jobData object to snake_case before posting
    const snakeCaseJobData = this.transformToSnakeCase(this.jobData);

    // Call the JobService to post the job data in snake_case
    this.jobService.postJobData(snakeCaseJobData).subscribe(
      response => {
        console.log('Job successfully posted:', response);
        // Optionally, reset the form after successful submission
        this.resetForm();
      },
      error => {
        console.error('There was an error posting the job:', error);
      }
    );
  }

  // Function to transform object keys from camelCase to snake_case
  transformToSnakeCase(obj: any): any {
    const newObj: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const snakeCaseKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
        newObj[snakeCaseKey] = obj[key];
      }
    }
    return newObj;
  }

  // Function to format the date to ISO string format (YYYY-MM-DDTHH:mm:ssZ)
  formatDateToISO(date: string): string {
    const formattedDate = new Date(date);
    return formattedDate.toISOString();
  }

  // Function to reset the form
  resetForm() {
    this.jobData = {
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
  }
}
