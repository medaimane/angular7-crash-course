import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.service();
    this.dataService.getUsers().subscribe((res : any) => {
      console.log(res)
      this.users = res.data;
    });
  }

}
