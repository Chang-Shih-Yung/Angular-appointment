import { Component } from '@angular/core';
//引入表單數據雙向綁定模塊
import { FormsModule } from '@angular/forms';
//引入公共模塊
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [FormsModule, CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  //確保它只在組件初始化時設置一次。避免每次更新重新選染的閃爍
  public CITY_LIST = ['台北', '東京', '上海', '新加坡', '首爾', '吉隆坡', '曼谷','北京','香港'];
  //雙向綁定，獲取數據
  public peopleInfo: any = {
    username: '',
    //input選中女的的時候值變成0(value=0)，然後更新到此peopleInfo對象中。反之則是男
    gender: '',
    cityList: this.CITY_LIST,
    city: '台北',
  };
}
