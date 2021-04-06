import { LightningElement, track } from 'lwc';
import Name_field from '@salesforce/schema/Account.name';
import sobjectName from '@salesforce/schema/Account';
export default class HelloWorld extends LightningElement {
  contacts=[
    {
      Id:'009872367',
      Name: 'Abhijeet',
      Title: 'CRM consultant'
    },
    {
      Id:'009872369',
      Name: 'AbDas',
      Title: 'CRM consultant'
    },
    {
      Id:'009872368',
      Name: 'Abhisek',
      Title: 'CRM consultant'
    },

  ];
  @track greeting = 'ADas';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}