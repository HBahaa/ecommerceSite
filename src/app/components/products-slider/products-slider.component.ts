import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.css']
})
export class ProductsSliderComponent implements OnInit {
	@Input() id: number;
	@Input() data: object;

	constructor() { }

	ngOnInit() {
	}
}
