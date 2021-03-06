import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { FilePreviewModel } from '../file-preview.model';
import { FilePickerAdapter } from '../file-picker.adapter';
import { UploaderCaptions } from '../uploader-captions';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'file-preview-container',
  templateUrl: './file-preview-container.component.html',
  styleUrls: ['./file-preview-container.component.scss']
})
export class FilePreviewContainerComponent implements OnInit {
  @Input() previewFiles: FilePreviewModel[];
  @Input() itemTemplate: TemplateRef<any>;
  @Input() enableAutoUpload: boolean;
  @Output() public removeFile = new EventEmitter<FilePreviewModel>();
  @Output() public uploadSuccess = new EventEmitter<FilePreviewModel>();
  @Output() public uploadFail = new EventEmitter<HttpErrorResponse>();
  lightboxFile: FilePreviewModel;
  @Input() adapter: FilePickerAdapter;
  @Input() captions: UploaderCaptions;
  constructor() { }

  ngOnInit() {
  }
  openLightbox(file: FilePreviewModel) {
   this.lightboxFile = file;
  }
  closeLightbox() {
    this.lightboxFile = undefined;
  }

}
