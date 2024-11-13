import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';
@Component({
  selector: 'app-image-cropper-modal',
  standalone: true,
  imports: [ ImageCropperComponent, CommonModule ],
  templateUrl: './image-cropper-modal.component.html',
  styleUrl: './image-cropper-modal.component.css'
})
export class ImageCropperModalComponent {
  isOpen = false;
  imageChangedEventProfile: any = '';
  croppedImageProfile: any = '';
  imageChangedEventBanner: any = '';
  croppedImageBanner: any = '';

  @Output() croppedImagesEvent = new EventEmitter<{profile: string, banner: string }>();

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  fileChangeEvent(event: any, type: 'profile' | 'banner'): void {
    if (type === 'profile') {
      this.imageChangedEventProfile = event;
    } else {
      this.imageChangedEventBanner = event;
    }
  }

  imageCropped(event: ImageCroppedEvent, type: 'profile' | 'banner') {
    if (type === 'profile') {
      this.croppedImageProfile = event.base64;
    } else {
      this.croppedImageBanner = event.base64;
    }
  }

  saveCroppedImages() {
    this.croppedImagesEvent.emit({
      profile: this.croppedImageProfile,
      banner: this.croppedImageBanner
    });
    this.closeModal();
  }
}
