import { LightningElement, track, wire } from 'lwc';

import accList from '@salesforce/apex/AccountListController.getAccounts';

export default class AccountList extends LightningElement {

    @track accounts;
    @track results;
    @track errors;
    @track searchAccount;

    @wire(accList,{
        accName : '$searchAccount'
    })
    accntList({error,data}){
        if(data){
            this.accounts=data;
            
            console.log('data======='+data);
        }
        if(error){
            this.errors=error;
            console.log('errors====='+ error);
        }
    }

    handleSearch(event){

        this.searchAccount = event.target.value;

    }
}