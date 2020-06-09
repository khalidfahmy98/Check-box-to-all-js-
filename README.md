# Check-box-to-all-js-
this code repo made for while checking one checkbox in the main header all other checkboxes for that parent are also selected or non-selected 

# usage Example 
When having table and there is a column in this table has checbox and all rows below this column are also have checkbox 
and you need to check all while only you check the header checbox 

#How to use 
  1- implement the file into your project 
  2- invoke function checkAllFunction(parent,children)
    in parent = the parent header checkbox class name as following -> .parentCheckbox 
    in children the same with parent the childrens class name -> .childrenCheckbox 
    notice that those class name may be different based on your html code and its optional for you
    
    INVOKE Example with the above class names  : 
    checkAllFunction(".parentCheckbox",".childrenCheckbox");
      
