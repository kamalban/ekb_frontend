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

  public up: boolean = true;
  public uttrakhand: boolean = false;
  public punjab: boolean = false;
  public goa: boolean = false;
  public year2017: boolean = true;
  public year2012: boolean = false;

  public UP: any;
  public UP_Awadh: any;
  public UP_Bundelkhand: any;
  public UP_Purwanchal: any;
  public UP_WestUP: any;
  public Goa: any;
  public overall:any;
  public Punjab: any;
  public Uttarakhand: any;
  public user: any;
  public OverAll:any;


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
        this.UP = result.UP;
        this.UP_Awadh = result.UP_Awadh;
        this.UP_Bundelkhand = result.UP_Bundelkhand;
        this.UP_Purwanchal = result.UP_Purwanchal;
        this.UP_WestUP = result.UP_WestUP;
        this.Goa = result.Goa;
        this.Punjab = result.Punjab;
        this.Uttarakhand = result.Uttarakhand;
        this.user = result.user;
        this.OverAll = result.OverAll
      }
    }, (error) => {

      this.modalService.open(this.internetNotWorking);
    })
  }

  click(name: string) {

    if (name === 'up') {
      this.up = true;
      this.uttrakhand = false;
      this.punjab = false;
      this.goa = false;
      this.overall = false;
      return;
    }
    if (name === 'uttrakhand') {
      this.up = false;
      this.uttrakhand = true;
      this.punjab = false;
      this.goa = false;
      this.overall = false;
      
      return;
    }
    if (name === 'punjab') {
      this.up = false;
      this.uttrakhand = false;
      this.punjab = true;
      this.goa = false;
      this.overall = false;

      return;
    }
    if (name === 'goa') {
      this.up = false;
      this.uttrakhand = false;
      this.punjab = false;
      this.goa = true;
      this.overall = false;
      return;
    }
    if (name === 'overall') {
      this.up = false;
      this.uttrakhand = false;
      this.punjab = false;
      this.goa = false;
      this.overall = true;
      return;
    }
  }

  claim() {
    this.route.navigate(['form'])
  }
}

