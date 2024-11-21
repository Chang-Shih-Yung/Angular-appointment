import { Component } from '@angular/core';
//引入表單數據雙向綁定模塊
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  //雙向綁定，獲取數據
  public peopleInfo: any = {
    username: '',
    //input選中女的的時候值變成0(value=0)，然後更新到此peopleInfo對象中。反之則是男
    gender: '',
    cityList: ['台北', '東京', '上海', '新加坡'],
    city: '',
  };

  //獲取表單數據
  public doSubmit(): void {
    console.log(this.peopleInfo);
    alert('成功獲取名字為' + this.peopleInfo.username);
    alert(
      '成功獲取性別為' + (this.peopleInfo.gender === '1' ? '男生' : '女生')
    );
    alert('成功獲取居住城市在' + this.peopleInfo.city);
  }
}
