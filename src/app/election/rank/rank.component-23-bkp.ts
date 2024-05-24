import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {

  @ViewChild('internetNotWorking') internetNotWorking: any;
  constructor(
    private httpService: HttpService,
    private modalService: NgbModal,
    private route: Router
  ) { }

  public Rajasthan: any;
  public Chattisgarh: any;
  public mp: any;
  public Telangana: any;
  public Mizoram: any;
  public year2017: any;
  public year2012: any;
  public user: any;



  ngOnInit(): void {
    this.getLeaderBoardData()
  }


  async getLeaderBoardData() {
    let tmpData: any = localStorage.getItem('userData') || '';
    let mobileNumber: number = 0;
    if (tmpData) {
      tmpData = JSON.parse(tmpData);
      mobileNumber = tmpData.mobileNumber;
    }
    await this.httpService.postRequest('getleaderboardata', { "mobileNumber": mobileNumber }).pipe().subscribe((result: any) => {
      if (result) {
        // console.log(JSON.parse(result))
        result = JSON.parse(result.message)
        console.log(result)
        this.Rajasthan = result.Rajasthan;        
        this.Chattisgarh = result.Chattisgarh;
        this.mp = result.mp;
        this.Telangana = result.Telangana;
        this.Mizoram = result.Mizoram;
        this.user = result.user; 
      }
    }, (error) => {

      this.modalService.open(this.internetNotWorking);
    })
  }

  click(name: string) {

    if (name === 'Rajasthan') {
      this.Rajasthan = true;
      this.Chattisgarh = false;
      this.mp = false;
      this.Telangana = false;
      this.Mizoram = false;
      return;
    }
    if (name === 'Chattisgarh') {
      this.Rajasthan = false;
      this.Chattisgarh = true;
      this.mp = false;
      this.Telangana = false;
      this.Mizoram = false;
      return;
    }
    if (name === 'MP') {
      this.Rajasthan = false;
      this.Chattisgarh = false;
      this.mp = true;
      this.Telangana = false;
      this.Mizoram = false;
      return; 
    }
    if (name === 'Telangana') {
      this.Rajasthan = false;
      this.Chattisgarh = false;
      this.mp = false;
      this.Telangana = true;
      this.Mizoram = false;
      return;
    }
    if (name === 'Mizoram') {
      this.Rajasthan = false;
      this.Chattisgarh = false;
      this.mp = false;
      this.Telangana = false;
      this.Mizoram = true;
      return;
    }
  }

  claim() {
    this.route.navigate(['form'])
  }
}

