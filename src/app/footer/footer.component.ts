import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  private currentActiveLink: HTMLElement | null = null;

  topFunction(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setActiveLink(id: string): void {
    setTimeout(() => {
      const linkElement = document.getElementById(id);
      if (!linkElement) return;

      // Reset previous active link color
      if (this.currentActiveLink) {
        this.currentActiveLink.style.color = '#5e6085'; // default color
      }

      // Set new active link color
      linkElement.style.color = '#ff8c00'; // active color

      // Update current active link
      this.currentActiveLink = linkElement;
    }, 200);
  }

}
