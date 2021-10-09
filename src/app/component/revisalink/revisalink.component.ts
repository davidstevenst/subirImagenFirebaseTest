import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-revisalink',
  templateUrl: './revisalink.component.html',
  styleUrls: ['./revisalink.component.css']
})
export class RevisalinkComponent implements OnInit {

  link:string ="";

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    

    this.link=this.activatedRoute.snapshot.paramMap.get('imagen');
  }

}
