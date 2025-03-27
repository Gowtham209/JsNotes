import Boss,{pi,sum as sums,pow as pows} from "../util.js";
    // Here Boss is a Alias Name. It is Primary Module that is been Imported from UTIL.js file


// Variables

/* 

let , var , const

NOTE:
    All the types of Variable are Data type Independent
    All the Varaible Need to be '''UNIQUE'''
    Don't Declare SAME Varaibel TWICE
const: -> constant
    This is a CONSTANT variable which means the Values Once assigned then which can't MODIFIED

var: -> variable
    This is the Legacy variable which can be Access across all the Functions,Globally
    *Not recommended AtMost times

let:
    let is BLOCK level Variable which means Once we specified the let inside a function , class
then that let variable CAN'T be accessed outside the BLOCK     

*/
//Example:
const planet="Earth";

var name="Gowtham";

let age=24;


// Data Type
/* 
   NUMBER,STRING,BOOLEAN,UNDEFINED,NULL,OBJECT,NaN


   Number:
    Both Whole Numbers and Decimal Numbers COMES under NUMBER
 
   NOTE:
    NaN[Not a Number] is still a NUMBER Data type

    Example: 
*/
let a1=1234;
let a2=0.98;

/*
    NOTE:
        Javascript numbers are always one type:
double (64-bit floating point).

Later ES2020 "BigInt" introduced
 
*/
let x = BigInt("123456789012345678901234567890");

/*  
    STRING:
    Both Single character and Collection of characters COMES under STRING
    
    Example:
    */
let c1='a';
let c2="string da";

/*
    BOOLEAN:
        ONLY TWO VALUE true / false
    
    Example:    
*/
let voterId=true;
let single=false;


/*
    UNDEFINED:
        In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

Example:
*/
let car;    // Value is undefined, type is undefined

/*   Any variable can be emptied, by setting the value to undefined. The type will also be undefined. */

Example
car = undefined;    // Value is undefined, type is undefined


/*

    Object Datatype
        The object data type can contain both built-in objects, and user defined objects:

    Built-in object types can be:
        objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more
 
*/

let arrays=[1,2,3,4,5]

/*

        Arithmetic Operators:
    
        Note:
            Two words to be Known "operands" and "operators"

        Operands:
            Values,variables
        Operators:
            Normal Operators                : + - * / **[power] %[reminder] 
            Agumented Assigned Operators    : += -= *= **= %=
            Increment & Decrement Operators : ++ -- 
*/

let x1=90;
x1+=100;

x1=4;
x1++;

/*

        Operator Precedence:
        1. Parenthesis ()
        2. Exponents (** [Power operator])
        3. Multiplication & Division & Modulo
        4. Addition & Substraction

        NOTE:
            JS evaluate from LEFT to RIGHT

        Example:
*/

let result= 7**2-1+9-8+(5*3);
//          49-1+9-8+15
//          49+8+7
//          64

/*

        Data Type Conversion
            Changing a Variable Data type to Another Data type

        NOTE:
        JS always gives us String as the Input from User

*/

let num=90;

console.log(num," ",typeof num);  // 90 number

let str="hai";
let val=Number(str);

console.log(val," ",typeof val);  // Nan Number

/*

        IMPORTANT:
            Empty String is always String Data type
                Converting Empty String to Number => 0
                Converting Empty String to Boolean => False

                Converting Non Empty String to Number => Nan if Non Number else Number will be Given
                Converting Non Empty String to Boolean => True
                        

*/


let input1="99";
let numValue=Number(input1)
let boolValue=Boolean(input1);
console.log(numValue," ",boolValue);


/*



*/



/* 
        Functions:
                "function" is Keyword used to Specify a function in JS
        
        NOTE:
            Within the Function Argument we can Set a "Default" Value        
            Traditional/ Normal
*/

function sayHello()
{
        console.log("Hai Hello!")
}
sayHello()

//          With Argument

function greet(name)
{
    console.log(`Hai ${name}`)
}

greet("Gowtham")

function valiedEmail(email)
{
    let dotIndex=email.indexOf(".");
    let atIndex=email.indexOf("@");
    let len=email.length;
    if(atIndex>-1 && dotIndex>-1 && atIndex>0 && dotIndex<len-1 && atIndex<dotIndex && atIndex+1!=dotIndex)
    return true;

    return false;
}

console.log(valiedEmail("tsgowthm@yahoo.com"))


/*
    Function Expression:
        Assign a Constant to Function then Treating as a Function
    Example:
*/

let arr=[3,4,6,8]
let pow=function(element)
        {
            return Math.pow(element,2);
        }

let t1=pow(4)        
console.log(t1)     

console.log(arr.map(pow))

/*
        Arrow Function

        This is Little Advanced Than Expression Function
        
        NOTE:
            this keyword doesn't work with Direct Object Creation
        Example:
*/
let cube=(val)=>Math.pow(val,3)

let square=(val)=>{
    console.log("Arrow:",val)
    return val*val
}

console.log(arr.map(cube))
console.log(arr.map(square))

let count=0;

//let st=setInterval(oneAtaTime,2000)

function oneAtaTime()
{
   
    if(count==4)
    {
        clearInterval(st)
        return
    }
    console.log("Val:",arr[count])
    count++;
}
console.log(count)

/*

    IF , ELSE , TERNARY ,ELSE IF , SWITCH Conditional Operations


*/



/*

        Array Data type:
*/


let array=["apple","banana","cucumber"];
array.push("orange");
console.log("After Push:",array);

array.pop();
console.log("After Pop:",array);

array.unshift("mango");
console.log("After Unshift:",array); // UnShift Cause the Array to Be SAME LENGHT but Moves the Front Element one index INCREAMENT and followed Others and LAST value is Totally Removed from the Array

array.shift();

console.log("After Shift:",array); // Shift Pop Element from the FRONT and Changes Reduces the Array Size

// Spread Operator
let fruit=[...array] // array Array isn't Affected
console.log("After Spread Operation:",array);
/*

Spread Operator is used to Unpack Arrays and STRING into Individual elements

*/

let og=["lambo","porsche","audi"]
let shallowCopy=[...og]

console.log("OG:",og,"\nShallowCopy:",shallowCopy);

og[0]="Ferrari";

console.log("\nAfter index 0 Value Change\nOG:",og,"\nShallowCopy:",shallowCopy);
/*
    Note:
        Original Array Value change doesn't Affected the ShallowCopy Array

*/

/*

    Rest Operator:
        This is used within Function Parameter to Convert Dynamic Values into Array

*/

function arrayCreator(...values)
{
    console.log("Given Parameter Converted to Array:",values," , Verify:",typeof values);
    return values;
}

let carValue1="Tata";
let carValue2="Suzuki";
let carValue3="Mahendra";
let resultArray=arrayCreator(carValue1,carValue2,carValue3);
console.log("REST paramter\nResult Array:",resultArray);


/*

    Find Index of Specific Element in Array:

    Note:
        If the Specific value is "Not Present" in the Array indexOf returns "-1"

*/

let arrLen=fruit.length;
console.log("Array Length:",arrLen);

let index=fruit.indexOf("cucumber");
console.log("Index Position of Element in a Array HERE 'cucumber' element Index is:",index);

// Build in Array Methods


/* Reverse  */

let revArr=arr.reverse();
console.log("Reversed Array:",revArr);

/* Note:
Can Reverse Mixed Data type Array too SIMPLY Reversing ONLY know
*/

/* Sort   */
 
let sortArr=revArr.sort(); 
/*
Note:
    By default the sort() will convert the Elements into String and Sort by LEXICOGRAPHY [RESULT won't BE all String values It is Temproray for "sort()" method to Arrange]
    Ascending Order by Default
*/

console.log("Sorted Array:",sortArr);

/* Customizing sort() Method by Comparision Functions  */

let people=[{name:"Raj",age:22},{name:"Arun",age:26},{name:"Guna",age:18}];

/*
    "localeCompare":
     For sorting by strings, use the localeCompare method, which is "specifically designed for string comparison."
*/
console.log("Sorted by Name:",people.sort((a,b)=>a.name.localeCompare(b.name)))

// Comparing Age:

console.log("Sorted by Name:",people.sort((a,b)=>b.age-a.age))

/*
    NOTE:
        Comparing Function works:
            result=(a,b)=> a-b
            
            Result NEGATIVE -> a comes BEFORE b
            Result ZERO -> a and b are Considered Equal
            Result POSITIVE -> a comes AFTER b

*/





/*

    Object Literals/Direct Object
        object Store Key,Value pair of Varaible & Methods
        Object class is the Primary Class to All the Following classes in JS
        Before Object class Null is Primitive

    Note:
        Can't Able to Create a Field after the Declaration like in Python
        "this" Keyword DoesNOT work in Arrow Function in the OBJECT
        ""="" is Depricate instead we need to use "":"" to Assign values and Function to a Key
*/

const p1={
    name:"Gowtham",
    age:29,
    "marital":false,
    programKnow:()=>console.log("Java,C,Python,SQL"),
    ate:function(){console.log("S")},
    add:(x,y)=>
    {
        return x+y;
    }
}
console.log(p1.name)
console.log(p1.marital)
console.log(p1.age)
p1.programKnow()
p1.ate()
console.log(p1.add(60,9))


/*

    this
        this keyword reference of the Current Object

    Example:    
*/

const person1={
    name:"Ram",
    age:29,
    greet:function(){
        console.log(`Hai there Iam ${this.name} and my Age is ${this.age}`)
    },
    "gap":"Loolu",


    /*
    
    greet:()=>{
         console.log(`Hai there Iam ${this.name} and my Age is ${age}`)
        }
    
    NOTE:
        Here the "this" Keyword Does NOT with Arrow Function ONLY in Object Literals

    */
}

console.log(person1.gap)
person1.greet()


/*

    Constructor
        Special function for Declaring Properties and Methods of Objects
        Always Name the Constructor with 1st Letter in Capital 
        "=" is used to Assign key value Pair for Properties and Methods 

        Note:

            LIKE Python we Can Create Properties & Methods even AFTER the OBJECT Creation Like Pthon
            ":" is Not Allowed to Assign Key value Pair
*/

function Car(brand,model,type,price)
{
    /*
    
    "this" is used to Create the protertise[Field] for The Object Itself
    
    */
    this.Brand=brand,
    this.Model=model,
    this.Type=type,
    this.Cost=price,
    this.start=function()
    {
        console.log(`${model} is Started`)
    }
    this.stop=()=>console.log(`${this.Model} car is Now STOPED !!`)
}

const car1=new Car("Lamborghini","Aventador","SuperCar",70000000);
car1.start();
car1.stop();
console.log("&".repeat(10),car1.Brand)

// Declaring an Method or Property After the Object Creation is Possible only in Constructor
car1.family=function()
{
    console.log("My family is CAR")
}
console.log(car1.Cost.toFixed(2))
car1.family()



/*

    CLASS   
        class is a Feature that was released after ES6 which Is Similar to Java Class

        constructor is the Keyword to Create Constructor inside Class unlike JAVA

        No need to use "function" keyword to Declare the function we can directly define a Function


        NOTE:
         static Keyword works Same as in Java But Can't be Access/Modified by the Instance instead only by the Class Name
         static properties & Methods are Belong ONLY to CLASS not with Object so They Can't be Accessed or manipulated
*/


class Animal
{

    static countOfObject=0;
    constructor(name,age)
    {
        this.name=name,
        this.age=age
        Animal.countOfObject+=1;
        // Static property is Accessed Only by the Class Name
    }

    callAmma()
    {
        console.log(`${this.name} says Aammma`)
        return "pooda"
    }

    // Below Method Can ONLY be Accessed by Class Name
    static countReturn()
    {
        return Animal.countOfObject;
    } 
}

const obj=new Animal("Cow",3)

console.log(obj.callAmma())
console.log(Animal.countOfObject)
console.log(Animal.countReturn())

/*

    Inheritance
        Js can "extends" ONLY One Class 
        extends keyword is used to Inherite from Parent Class into Child Class

*/


class Bull extends Animal
{
    
    constructor(name="Unknown",age=-1)
    {
        super(name,age)
    }
    greet()
    {
        console.log(`Hai iam a Bull and My Name is ${this.name} `)
    }
}

let bull=new Bull("Huracane",3)
bull.callAmma();
bull.greet();


let bull1=new Bull("ferrari");
bull1.callAmma();
bull1.greet()


/*

    super() Keyword
        super() keyword works same as Java Super But we Need to Explicity need to Mention Super in Every Constructor of the Child Class even No need to Send anything to Parent Class

    NOTE:
        IF we Mentioned Constructor in the Class then we MUST class super() EVEN if the Parent Class Doesn't have Constructor    
*/

class Parent{

    greeting()
    {
        console.log("Welcome form Parent")
    }

}

class Child extends Parent{

    constructor()
    {
        super()
    }
    greet()
    {
        console.log("Welcome to Child Class")
    }
}

let child1=new Child();
console.log(child1)
child1.greet()
child1.greeting()



/*
        Encapsulation:  
        *    JS doesn't not HAVE private,public,protected or default Keywords to Specify the Accessiblity
            Instead '_' before a field is Know as Private But if we use directly the Field Name or even with "_" because it won't be Visible thus Became Private 
        * get & set keywords are used to Define Getters and Setters of a fields 

            NOTE:
                Closure is Most Private a JS can Be. The Key thing to Note is a Outer Function Acts like a Container for Methods and Properties At the End it Returns the methods , properties as a OBJECT
                That ONLY has the Access to the Outer Function's Methods and Properties


*/


class ReserveBank
{
    _bankBrand="Reserve Bank"
    _location="Delhi"
    set bankBrand(name)
    {
        if(typeof name == 'string' && name.length>0)
            this._bankBrand=name
    }
    get bankBrand()
    {
        return `Bank Brand Name ${this._bankBrand}`
    }

    set location(name)
    {
        if(typeof name == 'string' && name.length>0)
            this._location=name
    }

    get location()
    {
        return `${this._location} is  Bank Location of ${this._bankBrand}`
    }
}

class SBI extends ReserveBank
{
    constructor(username,accountid,location) {
        super();
        super.bankBrand="SBI Banks";
        super.location=location;
        this.username=username;
        this.accountid=accountid; 

        // Here we Might think "this.username=name" means we are Creating a variable and Assiging Values
        // BUT NOT like that Here "this.username=name" means you are CALLING the Set method In WHICH "_username" variable is created and "name" value is Assigned 
    }

    set username(name)
    {
        if(typeof name =='string' && name.length>0)
            this._username=name
        else
            console.error(`${name} is Not a Appropriate value`)
    }

    get username()
    {
        return `userName:${this._username}`
    }

    set accountid(name)
    {
        if(typeof name =='number' && name>0)
            this._accountid=name
        else
            console.error(`${name} is Not a Appropriate value`)
    }

    get accountid()
    {
        return `AccountID:${this._accountid}`
    }
}

const user1 = new SBI("Raji",1974,"Udumalpet")

console.log(user1)
console.log(user1.username)
console.log(user1.accountid)
console.log(user1.bankBrand)
console.log(user1.location)

/*

        IMPORTANT NOTE:
        JavaScript handles instance variables dynamically through the this keyword. When you do this.username = name 
in the SBI class constructor, you are "Effectively Creating a Property" on the current object instance of the class (SBI). 
This property gets added to the object "Dynamically" without needing to declare it beforehand.

            This is different from Java, where you explicitly define instance variables as global within the class 
before using them in constructors or methods. In JavaScript, properties are essentially "created on the fly" as needed. 
The use of set and get methods in your code further ensures that any interaction with this.username is routed through custom logic 
for validation or transformation.

Internally:

When this.username = name is executed, the set username(name) method is invoked, and the value is assigned to the _username property.

You don’t need to declare _username globally within the class because JavaScript’s dynamic nature allows such properties to be added directly to the object instance.

This approach adds flexibility but also requires careful handling to avoid accidental property overwrites. In JavaScript, it’s common practice to use private fields (e.g., #username) or naming conventions (e.g., _username) to signify properties that shouldn’t be accessed or modified directly.
 */



/*

        Polymorphism
            JS doesn't Support Method Overloading which means if try to Create More than One Function with Same Name then the LASTly Created Function OVER-WRITE the Previous One 
            BUT It Support method Overriding

 */

class Vehicle
{
    start()
    {
        console.log(`${this.vehicle} is Started`)
    }
}            

class Jeep extends Vehicle
{
    set vehicle(name)
    {
        if(typeof name =='string' && name.length>0)
            this._vehicle=name
        else
            console.error(`${name} is Not a Appropriate value`)
    }
    get vehicle()
    {
        return this_vehicle
    }

    // Below Method is OverRidden Which means It is OverWritten Too So we Can't access the Vehicle start() by the Object of Jeep
    start()
    {
        console.log(`The Jeep ${this._vehicle} is Started`)
    }
}

const v1=new Jeep();
v1.vehicle="Mahrindra"
v1.start()

/* 


        Destructure 
            This is a Concept that is used to SWAP , Parse Out Specific Value and Create/Assign to Another Variable/Array/object OUT from ARRAY and OBJECT 
            If Working with ARRAY then use []
            If Working with OBJECT then use {}

        Like Below OBJECT can Also we DESTRUCTURED 
        NOTE:   
            DESTRUCTURE takes Place One Value After Another So if you want to EXTRA a SPECIFIC Value then for Array use the Index and for Object use the Key    

*/

let ch1=90,ch2=60;

// Converting to Array So we can perform DESTRUCTURE
let arr1=[ch1,ch2];
//SWAP
[ch2,ch1]=arr1
            //or
/*
    [ch1,ch2]=[ch2,ch1]
*/
console.log(ch1,ch2)

//Parsing Specific Value from Array by DESTRUCTURE

let fruits=["Mango","PineApple","Watermelon","Banana","Apple","Orange"]

let [f1,f2,f3,...extra]=fruits;

console.log("After Parsing:",f1,f2,f3,"\nInto a Array:",extra)

/*
    LOOPS:
        Js supports For , while , do-while

        for can be used multiple types like Normal[Java like], Array , object


*/

/*

    While Loop:
        This Loop is Used for UnKnow Number of time Iterations and Can also Used for Known Number of Iterations

*/

let u=0;
while(u==0)
{
    console.log("U:",u);
    u++;
}

/*

    Do-While Loop:
        This Loop Runs Atleast ONCE even if the Condition of the Loop is false Initially

*/


do{
    console.log("DO-WHILE U:",u,"\nThis will Run Atleast Once")
}while(u<10)


/*

    Normal For Loop:
        This Loop is Mostly Used for Known Number or Iterations [Limited Amount of Iterations]

*/

for(let x=0;x<10;x++)
{
    console.log("X:",x);
}

/* 
        for Each Iteration Over Arrays , Object


        * for(let element of arr)
        {
            console.log(element);
        }

        * for(let key in person)
        {
            console.log(person[key])
        } 
*/

for(let val of arr)
{
    console.log(`by the (for of ) to Ietarte values of Array:${val}`)
}

console.log("*".repeat(10))

for(let key in p1)
{
    console.log(`${key}:${p1[key]}`);
    if(typeof p1[key] =='function')
        {
            console.log("Function call")
            p1[key]()
        }
}




/* 


        Closure:
            Closure is a Concept That Maintain the Variable & Methods as PRIVATE and Maintain STATE

*/

function SingleTon()
{

    let count=0;

    function increament()
    {
        count++;
    }

    function decrement()
    {
        count--;
    }

    function getCount()
    {
        return count;
    }

    return {
        increament,decrement,getCount
    }

    /*
    
        The Above object is Internally Defined as Below SAME as Usual Declaration of Literal Object[key-value] Pair

        return {
        increament:increament,
        decrement:decrement,
        getCount:getCount
        }
    
    */
}

// Note Below We DIDn't USE "new" because the "SingleTon()" isn't Constructor Instead it RETURN a OBJECT LITERAL
let counter=SingleTon()
console.log(counter.getCount())
counter.increament();
counter.increament();
console.log(counter.getCount())


console.log("jhgf")

/*

    Modules
        This Concept as Introduced after the ES6 release
        This Help to Import and Export Methods,Properties,Class from One Js file to Another

        NOTE::
            Before Importing We need to Specify 
            <script  type="module"  src="current.js"> </script>

            ONLY after Specifing the "type" as "module" JS allow to Import 

*/

console.log("Module:",sums(89,90,678));


/*   

        Expection:
            JS does Not has any Keyword as "Exception" instead everything is called as "Error"
            "throw" keyword is used to Create new Error when required or for Debugging
            try,catch,finally are SAME as JAVA
            BUTE catch(error) is the ONLY Argument we get
*/


try
{
    let v=0;
   //if(typeof window.prompt("Enter a value")== undefined)
    throw new Error("Custome Error")
//    else
//     v=1/0
}
catch(error)
{
    console.error(error)
}
finally{
    console.log("Run Even if there isn't Error")
}


/*

    forEach() doesn't return New Array
        forEach() is mostly used for Printing , DOM manipulation unlike .map(),.filter(),.reduce() which will return some Value But
    forEach() wasn't desgined for that 
        NOTE: forEach() will GIVE element,index,array to the CallBack function

    #### forEach() & map() are SIMILARY But MAIN Different is map() will Return Values but forEach() doesn't

    map(),filter() return New Array
        map() will Return SAME number of Elements as NEW Array which has been sent to it
        filter() based on the True or False condition it will generate a New Array based upon Condition 

    reduce() return Single Value
        reduce() is USED Only for generating Single Output value out of Array based of the Condition we specify
        NOTE: reduce function will get Accumulator, Element , IndexPlusOne , Array as Parameter to the Custom Function
            "********Accumulator WILL be SAME Data type As the FIRST Element of the Array"  

*/

function display(element,index,array)
{
    console.log("Value:",element)
    return element; // Doesn't Matter Since this Method is Consumed by .forEach() it won't return value So NO USE of this Return 
}
let array1=[34,67,28,45,67];

array1.forEach(display);



function evenNumberOnly(element,index,array)
{
    console.log("Element:",element,"\nIndex:",index,"\nOg Array:",array,"\n\n\n");
    return element%2==0;
}

function doubleOnlyOdd(element,index,array)
{
   console.log("Element:",element,"\nIndex:",index,"\nOg Array:",array,"\n\n\n");
    return element%2!=0?element*2:element;
}

function addOnlyEven(collector,element,indexPlusOne,array)
{
    console.log("Collector:",collector," element:",element," indexPlusOne:",indexPlusOne," Array:",array);
    return element%2==0?collector+element:0;
}



let a=[34,67,28,45,67];

let fa=a.filter(evenNumberOnly); // Generate a New Array that Contains ONLY Even Numbers

let ma=a.map(doubleOnlyOdd); // Generate a New Array with same Array Size Here Custom function will Doubles the Element which are EVEN

let ans=a.reduce(addOnlyEven); // Generate Single OUTput Here it is been Customized to SUM only Even Elements






/*
function check(a,b,c)
{
    console.log(a,b,c)
}


// console.log(arr.forEach(double))
// console.log(arr)
 let t=arr.map(double)
// console.log(arr)
 console.log(t)

function evenChooser(a,b,c)
{
    console.log("from filer:",a,b,c);
    // console.log(a%2==0)
     return a%2==0;
}

function double(element,index,arr,p)
{
     arr[index]=element*2;
     console.log("from callBack Double function:",element,index,arr,p);
    return index;
}
console.log("before:",arr)
let p=arr.reduce(double)
console.log("After:",p)

 arr=arr.filter(evenChooser)
 console.log(arr)




 function isAllFieldsFilled(fields)
 {
    for(let x of fields)
        {
            if(x==='')
                return false;
        }
        return true;
 }       

 let username='.';
 let age1='.';
 let email='.';
 let arr5=[username,age1,email];
 console.log("Mixin",isAllFieldsFilled(arr5))

 console.log("stack")
 let stack=[];
 for(let i=1;i<=5;i++)
    stack.push(i);


 while(stack.length!=0)
 {
    console.log(stack.pop());
 }
*/

 

