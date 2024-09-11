import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  formOfUpload!:FormGroup;
selectedFile:File[]=[];

  ngOnInit(): void {
    
  }

  saveUploads(){

  }

  onFileSelect(event:any):void{
  this.selectedFile.push(event.target.files);
  }
}
