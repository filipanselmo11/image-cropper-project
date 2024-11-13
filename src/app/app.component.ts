import { Component, ViewChild } from '@angular/core';
import { ImageCropperModalComponent } from './image-cropper-modal/image-cropper-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImageCropperModalComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'image-cropper-project';
  profileImage: string | null = null;
  bannerImage: string | null = null;

  @ViewChild(ImageCropperModalComponent) imageCropperModal!: ImageCropperModalComponent;

  openImageCropper() {
    this.imageCropperModal.openModal();
  }

  onImagesCropped(images: { profile: string, banner: string }) {
    this.profileImage = images.profile;
    this.bannerImage = images.banner;
  }

}
