import { Component } from '@angular/core';
//引入表單數據雙向綁定模塊
import { FormsModule } from '@angular/forms';
//引入公共模塊
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  //確保它只在組件初始化時設置一次。避免每次更新重新選染的閃爍
  public CITY_LIST = ['台北', '東京', '上海', '新加坡'];
  //雙向綁定，獲取數據
  public peopleInfo: any = {
    username: '',
    //input選中女的的時候值變成0(value=0)，然後更新到此peopleInfo對象中。反之則是男
    gender: '',
    cityList: this.CITY_LIST,
    city: '台北',
    hobby: [
      {
        title: 'Everything',
        checked: false,
      },
      {
        title: 'Same as email',
        checked: false,
      },
      {
        title: 'Same as email',
        checked: false,
      },
    ],
    mark: '',
  };

  //獲取表單數據
  public doSubmit(): void {
    console.log(this.peopleInfo);
    // alert('成功獲取名字為' + this.peopleInfo.username);
    // alert(
    //   '成功獲取性別為' +
    //     (this.peopleInfo.gender === '1'
    //       ? '男生'
    //       : this.peopleInfo.gender === '0'
    //       ? '女生'
    //       : '未選擇')
    // );
    // alert('成功獲取居住城市在' + this.peopleInfo.city);
    // alert('成功獲取愛好為' + this.peopleInfo.hobby);
    // alert('成功獲取備註為' + this.peopleInfo.mark);
  }
  // 下載 JSON 文件
  public downloadJson(): void {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(this.peopleInfo));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'peopleInfo.json');
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
}
