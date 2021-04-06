import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ShowToast extends LightningElement {
    toast(){
        const tEvent = new ShowToastEvent({
            title: 'title',
            message: 'WARNING!!!!!',
            variant: 'warning'
        });

        this.dispatchEvent(tEvent);

    }
}