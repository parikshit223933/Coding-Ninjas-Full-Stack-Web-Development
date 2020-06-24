import { Component, OnInit } from '@angular/core';
import { PostsListService } from '../posts-list.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  post:[];

  constructor(private postsListService:PostsListService) { }

  ngOnInit(): void {
  }

  getPosts():void
  {
    this.postsListService.getPosts().subscribe((date)=>
    {
      this.posts=data.posts;
    })
  }


}
