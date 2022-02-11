import { Component, OnInit } from '@angular/core';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.scss']
})
export class MembersTableComponent implements OnInit {


  members: any[] = []


  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe(data => {
      this.members = data;
    })
  }

}
