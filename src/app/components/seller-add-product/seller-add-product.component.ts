import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

	public editor;
	public editorContent = `<h3>I am Example content</h3>`;
	public editorOptions = {
		placeholder: "insert content..."
	};

	constructor() { }

	ngOnInit() {
	}

}
