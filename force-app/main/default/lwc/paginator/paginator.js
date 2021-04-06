import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {
    handlePrevious(){
        //creating event
        const prevEvent = new CustomEvent('previous');
        //trigger or fire event
        this.dispatchEvent(prevEvent);
    }

    handleNext(){
        const nextEvent = new CustomEvent('next');
        this.dispatchEvent(nextEvent);
    }
}