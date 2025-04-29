import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../data/services-data';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-teikiamos-paslaugos',
  imports: [CommonModule],
  templateUrl: './teikiamos-paslaugos.component.html',
  styleUrl: './teikiamos-paslaugos.component.scss'
})
export class TeikiamosPaslaugosComponent {
  services: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.services = this.dataService.getServices();
  }

  manageElement(position: string): void {
    const [paragraph, icon, image] = this.getElements(position);
    if (paragraph.classList.contains('hidden')) {
      paragraph.classList.remove('hidden');
      image.classList.remove('hidden');
      paragraph.classList.add('show');
      image.classList.add('show');
      icon.src = 'assets/minus.svg';
    } else {
      paragraph.classList.add('hidden');
      image.classList.add('hidden');
      paragraph.classList.remove('show');
      image.classList.remove('show');
      icon.src = 'assets/plus.svg';
    }
  }

  private getElements(position: string) {
    let paragraph: any;
    let icon: any;
    let image: any;

    switch (position) {
      case 'first':
        paragraph = document.getElementById('firstP')!;
        icon = document.getElementById('first')!;
        image = document.getElementById('firstImg')!;
        break;
      case 'second':
        paragraph = document.getElementById('secondP')!;
        icon = document.getElementById('second')!;
        image = document.getElementById('secondImg')!;
        break;
      case 'third':
        paragraph = document.getElementById('thirdP')!;
        icon = document.getElementById('third')!;
        image = document.getElementById('thirdImg')!;
        break;
      default:
        break;
    }

    return [paragraph, icon, image];
  }

}
