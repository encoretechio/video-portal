import { Component, OnInit,Input } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  private today: number;

  @Input()
  comments:Comment[];

  constructor() {
    this.today = Date.now();
  }

  ngOnInit() {
    //console.log("COMMENT LIST COMPONENT");
  }
}


  /*TODO***
    IF NO COMMENTS SHOW 'NO COMMENTS'
    SUBMIT COMMENT
  ****/