import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  private today: number;
  //private messageContent: string;

  @Input()
  comments:Comment[];

  @Output()
  postComment = new EventEmitter<string>();

  constructor() {
    this.today = Date.now();
  }

  ngOnInit() {
    //console.log("COMMENT LIST COMPONENT");
  }

  addComment(content: string) {
    this.postComment.emit(content);
  }


}


  /*TODO***
    IF NO COMMENTS SHOW 'NO COMMENTS'
    SUBMIT COMMENT
  ****/
