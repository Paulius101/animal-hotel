import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeikiamosPaslaugosComponent } from "../teikiamos-paslaugos/teikiamos-paslaugos.component";
import { KainynasComponent } from "../kainynas/kainynas.component";


@Component({
  selector: 'app-pradzia-hero',
  imports: [CommonModule, TeikiamosPaslaugosComponent, KainynasComponent],
  templateUrl: './pradzia-hero.component.html',
  styleUrl: './pradzia-hero.component.scss'
})
export class PradziaHeroComponent {

  showModal: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showModal = true;
    }, 3000);
  }

  closeModal(): void {
    this.showModal = false;
  }

  onOutsideClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.closeModal();
    }
  }
}
