import { LightningElement, track, wire } from 'lwc';
/** importing method  from Apex class*/
import mapDemo from '@salesforce/apex/LogicalLWCDemoClass.mapDemo';
import testString from '@salesforce/apex/LogicalLWCDemoClass.testString';
export default class LogicalLWCDemo extends LightningElement {

    @track greetings='hello Abhi !!';
    @track message="LWC Methodology";
    @track results=[];
    @track error;

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
        }
    
      ];

      /** invoking/connecting apex method  */
      @wire(mapDemo)
      valueList({ error, data }) {
        console.log('data received==='+JSON.stringify(data));
        if(data) {
            for(let key in data) {
                // Preventing unexcepted data
                if (data.hasOwnProperty(key)) { // Filtering the data in the loop
                    this.results.push({value:data[key], key:key});
                }
            }
        }
        
    }
    @wire(testString) strngValue;
    if (strngvalue) {
      console.log(JSON.stringify(strngvalue));
    }

}