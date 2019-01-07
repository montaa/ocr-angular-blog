import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  loveIts: number;
  created_at: Date;

  constructor() { 
    this.loveIts=0;
    this.created_at = new Date();
  }

  ngOnInit() {
  }

  likeIt(){
    this.loveIts ++;

    console.log("loveIts new value:"+ this.loveIts );
}


dislikeIt(){
    this.loveIts --;
    console.log("loveIts new value:"+ this.loveIts );
}

}


