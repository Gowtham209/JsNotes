// Advance Level 1 Topics

/* Higher Order Function

    A function which Accepts One or More Another Function as a Parameter or "A function that Return Another Function"
*/

// Accepting Function as Parameter

function askAnyNeed()
{
    console.log("Do you want Cofe ,Tea , Juice ?");
}

function greet(callBackAskAnyNeed)
{
    console.log("Hello Guys");
    callBackAskAnyNeed();
}

greet(askAnyNeed);


// Returning a Function

// Function that returns another function
function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}
    // Call the returned functions with different names
    console.log(createGreeting("Hello")("Alice")); // Output: Hello, Alice!


/*

        OR


    // Use the function to create a specific greeting function
        const sayHello = createGreeting("Hello");

    // Call the returned functions with different names
        console.log(sayHello("Alice")); // Output: Hello, Alice!

 */




/* 
    CallBack Function

    SIMPLY CallBack is Concept a Sending a Function to another Function and THE Accepting Function will Use it as Per the Need Async or Sync

    NOTE:
     Don't Use Parameter Brackets while sending the Function If so then it is not CallBack Because The Parameter Function will be Worked/Runned Before the Accepting Function Use it 

    Important:
    CallBack is Old Technique That Has a Problem Called "CallBack Hell" which is Multiple Nested Callback Function Within One Another This result in Complexity to Understand 
    So Promise Introduced Additional Provide Error Handling
*/

function sum(x,y)
{
    console.log("Answer:",x+y);
}
function welcome(callback,x,y)
{
    console.log("Welcome user")
    callback(x,y);
}

//✅ Below is the Right Way to do a CallBack Function SEND only the Function Name like a Variable
welcome(sum,90,10)

//❌ () Used So not CallBack Throw Error
welcome(sum(10,90),60,20);




/* 

        Closure:
            Closure is a Concept That Maintain the Variable & Methods as PRIVATE and Maintain STATE which means the Inner Function REMEBER/Hold the Values of Outer Function


        Note:
            Closure is Most Private a JS can Be The Key thing to Note is a Outer Function Acts like a Container for Methods and Properties At the End it Returns the methods , properties as a OBJECT
                That ONLY has the Access to the Outer Function's Methods and Properties    

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



/*
    Promise:
        Promise Has 3 State 
            Pending: Initial state, neither fulfilled nor rejected.
            Fulfilled: Meaning the operation completed successfully.    
            Rejected: Meaning the operation failed. 
        Promise By Default Gives Two CallBack function[resolve,reject] while creating a Promise Object
        This Two CallBack Functions are Linked with the Later usage of .then() and .catch() 
        Those Resolve , Reject will also used to Pass the data to the Following .then() and .catch()

    IMPORTANT:
        The promiseObject variable is kept in memory until the promise is either resolved or rejected.
    But the Rest of the Code runs EVEN when the flow crosses the PromiseObject variable    

    Note:
        Two callback can be Named any Think like (mottu,pattulu) no need to be (resolve,reject) 


    ADVANCED:
        Promise.all(): To handle multiple promises in parallel.
        Promise.race(): To return the first promise that settles (whether fulfilled or rejected).
        Promise.allSettled(): To wait for all promises to settle, regardless of their outcomes.


         

*/
const promiseObject=new Promise((resolve,reject)=>{
    const random=Math.random()*2;
    const result=Math.floor(random);
    console.log("Random:",random," Boolean:",result)
    if(result==1)
        resolve("Success i Got 1 in Random");
    else
        reject("Error i Got 0 in Random");
})

promiseObject.then((msg)=>{
    console.log("Then got Triggered and Recieved Data from Resolve Method");
}).catch((errormsg)=>{
    console.log("Catch got Triggered and Also Recieved Data from Reject Method")
})

/*
    Fetch:
        Fetch is used to Mainly to Work with API's. Fetch has similarities with Promise like .then() and .catch() because
    Fetch uses Promise under its Hood.
        Fetch is a Asyn Feature of JS 
        Multiple .then() but Only One .catch()
        Like Promise Fetch also Have Multiple .then() but Single .catch() concept
    NOTE:
        Fetch Returns a Promise
        Fetch doesn't Automically Reject on HTTP erros(like 404 05 500). So we need to Check for "response.ok" to Handle HTTP errors explicitly.    

*/

function pokemonFetcher()
{
    fetch(`https://pokeapi.co/api/v2/pokemon/pickachu`).then(response=>{
        if(!response.ok)
            throw new Error(`No pokemon found pickachu`);
        return response.json(); // .json() returns a Promise
    }).then(data=>{
            console.log("Data:",data);    
    })
    .catch(error=>{
        console.log("Error:",error);
    })
}

pokemonFetcher();

/*
    Asyn & Await:

        await can't be used without asyn ONLY one Exception Cases if we use Before Promise or with JS Module
        asyn returns a Resolved Promise so if Inbetween any Error we need to Use try catch block to Overcome that Difficulty
        When we use asyn and await we don't need to use .then() and .catch() instead "try and catch block" for Clearner Code

*/

async function ApiCall()
{
try{

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    const data = await response.json(); // THIS is Because x.json() ITSELF returns a PROMISE so We need to use "await" to Make sure it gets Resolved
    console.log("Data Recieved:",data);
}
catch(error)
{
    console.log(error);
}
}

ApiCall();



