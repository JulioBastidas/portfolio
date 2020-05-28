  import { Component, OnInit } from '@angular/core';
  import { MessageService } from '../../services/message.service';
  import * as _swal from 'sweetalert';
  import { SweetAlert } from 'sweetalert/typings/core';

  const swal: SweetAlert = _swal as any;


  @Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
  })
  export class ContactComponent implements OnInit {


    public user: any;


    constructor(public _MessageService: MessageService) {


      this.user = {

        name: '',
        subject: '',
        message: '',
        email: '',

      };

    }

    ngOnInit(): void {
    }

    contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      swal("Email sent!", "your email has been successfully sent", "success");
    });
    }

  }
