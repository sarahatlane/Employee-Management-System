import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  constructor(public modalRef: MdbModalRef<AddComponent>) {}


}


// import { Component } from '@angular/core';
// import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
// })
// export class ModalComponent {
//   constructor(public modalRef: MdbModalRef<ModalComponent>) {}
// }