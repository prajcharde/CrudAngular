import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs/Rx";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { DataserviceService } from "../service/dataservice.service";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  createform:FormGroup;
  editform:FormGroup;
  deleteform:FormGroup;
  element:any[];
  Member:any;
  id:any;
  post:any;
  posts:any;
  updatelement:any;
   public modalRef: BsModalRef;
  constructor(private service:DataserviceService,private fb:FormBuilder,private modalService: BsModalService) 
  {
    
   }
 public openModal(template: TemplateRef<any>)
  {
      this.modalRef = this.modalService.show(template);
  }

 public openModalforEdit(tempEdit:TemplateRef<any>,model:any)
 {
      this.post=model;
      this.modalRef = this.modalService.show(tempEdit);
 }
public openModalforDelete(tempDelete: TemplateRef<any>, model: any) 
{
    this.post = model;
    this.modalRef = this.modalService.show(tempDelete);
  }
  ngOnInit() {
    this.createform=this.fb.group({
      memberName:[null,Validators.required],
      memberEmail:[null,[Validators.required,Validators.email]],
      address:[null,Validators.required]
    })
    
    this.editform=this.fb.group({
      memId:[null,Validators.required],
      memberName:[null,Validators.required],
      memberEmail:[null,[Validators.required,Validators.email]],
      address:[null,Validators.required]
    })

     this.deleteform=this.fb.group({
      memId:[null,Validators.required],
      memberName:[null,Validators.required],
      memberEmail:[null,[Validators.required,Validators.email]],
      address:[null,Validators.required]
    })
    
    this.service.getAll().subscribe(data => {
            this.posts = data;
               console.log(this.posts);
        });
  }

 onSubmit(model:any)
  {
 this.service.create(model).subscribe(
      data => {   
       window.location.reload();
          },
      
     );
  }

editUser(model:any)
{
  debugger;
    this.service.update(model).subscribe(
      data => {    
         window.location.reload();
         },
      
     );
}

 deleteUser(model: any) {
    this.id = model.memId
    this.service.delete(this.id).subscribe(
      data => {
        window.location.reload();
      },
    );
  }


}
