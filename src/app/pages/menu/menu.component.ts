import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  foodData:any;

  constructor(private service:OrderDetailsService) {}

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
