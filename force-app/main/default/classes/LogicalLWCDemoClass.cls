public with sharing class LogicalLWCDemoClass {
    /*public LogicalLWCDemoClass() {       
            
        }*/

       @AuraEnabled(cacheable=true)
       public static Map<String,Integer> mapDemo(){
           try {
            Map<String,Integer> testMap = new Map<String,Integer>();
        
            testMap.put('Mercedes',1);
            testMap.put('Audi',2);
            testMap.put('BMW',3);
            testMap.put('Jaguar',4);

            return testMap;
           } catch (Exception e) {
               throw new AuraHandledException(e.getMessage());
           }
       }

       @AuraEnabled(cacheable=true)
       public static string testString(){
           try {
               return 'this is to test string';
           } catch (Exception e) {
               throw new AuraHandledException(e.getMessage());
           }
       }

      
        
}
