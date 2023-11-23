import { Component } from '@angular/core';
// import { NgModule } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  modalRef: MdbModalRef<EditComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(EditComponent);
  }

}
