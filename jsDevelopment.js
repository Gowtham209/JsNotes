// About Document

/*
   "document" keyword refers to the Document Object Model (DOM) of the currently loaded web page
    document gives Access to All the "CONTENTS" of the Current Page in which we can Manipulate the Tags,Values etcc
 */

    /*

    value ,textContent ,innerHTML ,innerText , outerHTML ,outerText

    value:
        value is Mostly used to get the Input values entered by the User in Most form tags.
        Uses:
            It retrieve and set the value of the USER input Interacting content tags Like <input> <textarea> <radio> etc..
    textContent:
        It Retrives only the Text from its Tag and Descendants Inner Tags even if those Inner Tags are Hidden
        Uses:
            Only used to Retrieve Text contents alone
        DisAdvantage:
            Can't Modify the Tags with  this
   
    innerHTML: 
        It Retrives All the Descendants Inner Tags and Text EXCLUDES the OWN Tag
        Uses:
            Allows to Modify the Tags also
        DisAdvantage:
            Security Risks '''Cross-Site Scripting (XSS)'''
    
    innerText:
        It Retrives same Like the ''textContent'' but Sensitive to CSS style so if Inner Tag is display:none or hidden it won't Retrive it         
        DisAdvanatge:
            Performance is Slow as Compared to ''textContent'' due to OVERHEAD of CSS
    
    outerHTML:
          It Retrives All the Descendants Inner Tags and Text INCLUDING the OWN Tag  
        Uses: 
          Useful when you need to get or replace an entire element (including the tags) rather than just its contents.  
        DisAdvantage:
            Security Risks '''Cross-Site Scripting (XSS)'''

    outerText:
          It works Similar to innerHTML for Retrieving the Value
          But Setting is Totally Different outerText just ''REPLACE'' all the Tags and Content into PLAIN Text what we have Replaced
        
        DisAdvantage:
            Removes the total Content Tag what we have Select into Plain text   

  !!!NOTE:
            The XSS Attack are done by INJECTING the JS script into the USER INPUT Tag like <input>,<textarea>,etc..
            In which the Attacker use the '''innerHTML''' and '''outerHTML''' keywords helps to convert Attacler code into JS code that Might run Normally like Other Tags that we have Designed in WebPage
            To Avoid this WE need to SANITIZE the Each and Every Input we get from the USER by Ignoring ''innerHTML and outerHTML'' and Converting the <>,& into HTML equvalent &lt,&gt,&amp to AVOID JS code conversion
*/

// Accessing the Tag of HTML from JS

/*    By ID:
        document.getElementById("");
      Note:
        "id" Always Unique so it Return '''Single Tag'''  

      By CLASS:
        document.getElementsByClassName("");  
      Note:
        "class" is not Unique so it Returns '''Arrays of Tag''' unlike "id"  

      By TAG NAME:
        document.getElementsByTagName("h1");
      Note:
        This returns the Arrays of Tags that are ALL present in the HTML page  
 * 
 */

          
/*const id_var=document.getElementById("id_att");
const class_var=document.getElementsByClassName("class_att")[0];

console.log("Before");
console.log(id_var.textContent)
console.log(class_var.textContent)

id_var.innerText="Pooda"
class_var.innerHTML="Bard du"

console.log("After");
console.log(id_var.textContent)
console.log(class_var.textContent)
console.log(`id:${id_var.textContent}
class:${class_var.textContent}`)

id_var.innerText*/


/* 
        Functions:
                "function" is Keyword used to Specify a function in JS
        
        NOTE:
            Within the Function Argument we can Set a "Default" Value        
            Traditional/ Normal
*//*

    value ,textContent ,innerHTML ,innerText , outerHTML ,outerText

    value:
        value is Mostly used to get the Input values entered by the User in Most form tags.
        Uses:
            It retrieve and set the value of the USER input Interacting content tags Like <input> <textarea> <radio> etc..
    textContent:
        It Retrives only the Text from its Tag and Descendants Inner Tags even if those Inner Tags are Hidden
        Uses:
            Only used to Retrieve Text contents alone
        DisAdvantage:
            Can't Modify the Tags with  this
   
    innerHTML: 
        It Retrives All the Descendants Inner Tags and Text EXCLUDES the OWN Tag
        Uses:
            Allows to Modify the Tags also
        DisAdvantage:
            Security Risks '''Cross-Site Scripting (XSS)'''
    
    innerText:
        It Retrives same Like the ''textContent'' but Sensitive to CSS style so if Inner Tag is display:none or hidden it won't Retrive it         
        DisAdvanatge:
            Performance is Slow as Compared to ''textContent'' due to OVERHEAD of CSS
    
    outerHTML:
          It Retrives All the Descendants Inner Tags and Text INCLUDING the OWN Tag  
        Uses: 
          Useful when you need to get or replace an entire element (including the tags) rather than just its contents.  
        DisAdvantage:
            Security Risks '''Cross-Site Scripting (XSS)'''

    outerText:
          It works Similar to innerHTML for Retrieving the Value
          But Setting is Totally Different outerText just ''REPLACE'' all the Tags and Content into PLAIN Text what we have Replaced
        
        DisAdvantage:
            Removes the total Content Tag what we have Select into Plain text   

  !!!NOTE:
            The XSS Attack are done by INJECTING the JS script into the USER INPUT Tag like <input>,<textarea>,etc..
            In which the Attacker use the '''innerHTML''' and '''outerHTML''' keywords helps to convert Attacler code into JS code that Might run Normally like Other Tags that we have Designed in WebPage
            To Avoid this WE need to SANITIZE the Each and Every Input we get from the USER by Ignoring ''innerHTML and outerHTML'' and Converting the <>,& into HTML equvalent &lt,&gt,&amp to AVOID JS code conversion
*/

// Accessing the Tag of HTML from JS

/*    By ID:
        document.getElementById("");
      Note:
        "id" Always Unique so it Return '''Single Tag'''  

      By CLASS:
        document.getElementsByClassName("");  
      Note:
        "class" is not Unique so it Returns '''Arrays of Tag''' unlike "id"  

      By TAG NAME:
        document.getElementsByTagName("h1");
      Note:
        This returns the Arrays of Tags that are ALL present in the HTML page  
 * 
 */

          
/*const id_var=document.getElementById("id_att");
const class_var=document.getElementsByClassName("class_att")[0];

console.log("Before");
console.log(id_var.textContent)
console.log(class_var.textContent)

id_var.innerText="Pooda"
class_var.innerHTML="Bard du"

console.log("After");
console.log(id_var.textContent)
console.log(class_var.textContent)
console.log(`id:${id_var.textContent}
class:${class_var.textContent}`)

id_var.innerText*/


