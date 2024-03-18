# Regular Expression
Characters:
1. numbers as "123" ==> "123" ==> "[0-9]{3}" as "\d{3}" 
2. "406004" ==> [0-9]{6}
3. Alphabets (LC) ==> [a-z]{6, 12}
4. Alphabets (UC) ==> [A-Z]{3, }
5. Password Combination ==> [a-zA-Z0-9!@#$%&]{8, 16}
6. Mobile Number ==> "9047048344" ==> "[6789]{1}[0-9]{9}" ==> "[6789][0-9]{9}" ==> "[6|7|8|9][0-9]{9}"
7. IP Address ==> "89.0.142.86" ==> "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}"

Meta-Characters:
1. "." ==> "." ==> "."; eg "aaa" ==> "..." (any element can be present)
2. "+" ==> "+" ==> "+"; eg "aaa" ==> "a+" (at least one element can be present)
3. "*" ==> "*" ==> "*"; eg "aaa" ==> "a*" (Zero or more element can be present)
4. \d ==> "[0-9]" ==> "[0-9]"; eg "123" ==> "\d{3}" 
5. \w ==> "[a-zA-Z0-9]" ==> "[a-zA-Z0-9]"; eg "abc" ==> "\w{3}"

Quantity:
1. min & max ==> {6, 12}
2. min is 1 and max can be of anything ==> {1, } - minimum 1 is mandatory
3. min is 0 and max can be of anything ==> {0, } - Optional
Grouping




API 
1. Local Storage - User Token, Other local data & for performance enhancements
2. Local JSON - this will be used for data such as unique/static 
3. Public API - Images, COVID information, Weather API, 
4. Private API - bound to our project, Google (auth token, Secret Key)
