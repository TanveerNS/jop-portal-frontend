import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { PostsService } from 'src/app/service/frontend/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  jobs: any[] = [];
  postImage:any = ["assets/img/icon/job-list1.png","assets/img/icon/job-list2.png","assets/img/icon/job-list3.png","assets/img/icon/job-list4.png","assets/img/icon/job-list1.png","assets/img/icon/job-list2.png","assets/img/icon/job-list3.png","assets/img/icon/job-list4.png","assets/img/icon/job-list1.png","assets/img/icon/job-list2.png","assets/img/icon/job-list3.png","assets/img/icon/job-list4.png"]
  constructor(private router: Router, private postsService:PostsService) {}

  ngOnInit(): void {
    this.postsService.getAllJobs().subscribe(
      (response:any) => {
        let list = response.data.slice(0,10).map((post:any, index:string)=>{return {
          ...post, imgSrc:this.postImage[index]
        }})
        this.jobs = list;
        console.log('Jobs fetched:', this.jobs);
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );
    this.showPreloader();
  }

  showPreloader() {

    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  }

}
