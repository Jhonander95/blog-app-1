import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredArray!: Array<any>;
  latestArray!: Array<any>;

  constructor( private postService: PostService ){}

  ngOnInit(): void {
    this.postService.LoadFeatured().subscribe( post => {;
      this.featuredArray = post; 
    });

    this.postService.LoadLatest().subscribe( post => {
      this.latestArray = post;
    })

  }

}
