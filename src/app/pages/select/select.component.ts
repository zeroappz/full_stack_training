import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastComponent } from '../../util/toast/toast.component';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ToastComponent
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  items: any;
  selectValue: any;
  selectValueSimple: any;

  exampleText: string;
  exampleMemo: string;

  constructor() {
    this.items = [
      { value: 'Analyze', label: 'Analyze' },
      { value: 'Automate', label: 'Automate' },
      { value: 'Manual', label: 'Manual' },
      { value: 'None', label: 'None' }
    ];
    this.selectValue = '1';
    this.selectValueSimple = '1';

    this.exampleText = 'Text Example';
    this.exampleMemo = 'Memo Example';
  }

  clickOnSelectSimple() {
    console.log('clickOnSelect' + this.selectValueSimple);
  }

  changeOnSelectSimple(event: any) {
    console.log('changeOnSelect' + this.selectValueSimple);
    console.log(JSON.stringify(event));
    // console.log(event);
  }

  clickOnSelect() {
    console.log('clickOnSelect' + this.selectValue);
  }

  changeOnSelect(event: any, data: any) {
    console.log('changeOnSelect' + this.selectValue);
    console.log(JSON.stringify(event));
    console.log(JSON.stringify(data));
  }

  onModelChange(event: any) {
    console.log('onModelChange' + this.selectValue);
    console.log(JSON.stringify(event));
  }

  addText() {
    this.exampleMemo = this.exampleMemo + ' \r\n ' + this.exampleText;
  }

}
