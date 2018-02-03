import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	name = 'vivek malik';

  constructor(private dataservice:DataService ) { }

  ngOnInit() {

      this.dataservice.getPosts().subscribe((posts)=>{
          console.log(posts);
      });
  }

}
