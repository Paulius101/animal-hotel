import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navigacija',
  imports: [CommonModule, RouterLink],
  templateUrl: './navigacija.component.html',
  styleUrl: './navigacija.component.scss'
})
export class NavigacijaComponent {
  setActiveLink(id: string): void {
    setTimeout(() => {
      const linkElements = document.querySelectorAll('.nav-links a');
      linkElements.forEach(link => (link as HTMLElement).style.color = '#5e6085'); // reset all to default color

      const activeLink = document.getElementById(id);
      if (activeLink) {
        activeLink.style.color = '#ff8c00'; // set active link color
      }
    }, 200);
  }

  navSlide(): void {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (nav) {
      nav.classList.toggle('nav-active');
    }

    navLinks.forEach((link, index) => {
      const linkEl = link as HTMLElement;
      if (linkEl.style.animation) {
        linkEl.style.animation = '';
      } else {
        linkEl.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    if (burger) {
      burger.classList.toggle('toggle');
    }
  }
}
