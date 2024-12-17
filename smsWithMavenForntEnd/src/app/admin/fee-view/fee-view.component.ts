import { Component } from '@angular/core';
import { FeeStudentService } from '../../service/fee-student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fee-view',
  templateUrl: './fee-view.component.html',
  styleUrl: './fee-view.component.css'
})
export class FeeViewComponent {
  resultData: any;
  id: any;

  constructor(private feeService: FeeStudentService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.getAllFees(this.id);
    });
  }

  ngDoCheck(): void {
    console.log("resultData", this.resultData);
  }

  getAllFees(id: any) {
    this.feeService.getFeeByStudentId(id).subscribe(data => (this.resultData = data));
    console.log("resultData", this.resultData);
  }
}
