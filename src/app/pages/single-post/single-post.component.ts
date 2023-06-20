import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post!: any;
  postSimilars!: any[];

  constructor( private postService: PostService, private route: ActivatedRoute ){}


/*   loadSimilars(categoryId: any){
    this.postService.LoadSimilar(categoryId).subscribe(posts => {
      this.postSimilars = posts;
    })
  } */

  ngOnInit(): void {
    this.route.params.subscribe(val =>{
      this.postService.LoadById(val?.['id']).subscribe( post => {
        this.post = post;
        //this.postService.countViews(val?.['id'], this.post?.views);
        this.postService.LoadSimilar(this.post.category.categoryId).subscribe(posts => {
          this.postSimilars = posts;
          console.log(this.postSimilars);
          
        })
      })
    })

  }

}
