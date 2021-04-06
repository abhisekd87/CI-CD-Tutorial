public with sharing class AccountListController {
   /* public AccountListController() {

    }*/

    @AuraEnabled(cacheable=true)
    public static List<sObject> getAccounts(string accName){
        try {
            string pattern ='%'+accName+'%';
            string query = 'SELECT Id,Name, Phone FROM Account WHERE Name LIKE :pattern';
            return Database.query(query);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}
