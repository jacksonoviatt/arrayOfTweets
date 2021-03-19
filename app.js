//Here I have an array of objects. An array is contained within square brackets, but you can also create a more 
// complex data structure by nesting javascript objects within curly brackets. 

var twitterFeed = [
    {
        username: `ladyDiana`,
        date: `12-06-2019`,
        age: 16,
        tweet: `if princess diana was alive today i think she would’ve been a guest judge on drag race`
    },
    {
        username: `zackAndCody`,
        date: `02-12-2018`,
        age: 23,
        tweet: `disney used to be like “new episode at 8/7 central” like we knew what that meant`
    },
    {
        username: `janeAusten`,
        date: `11-25-2020`,
        age: 26,
        tweet: `“i think you’re cute” ok so wear a photo of me inside a heart shaped locket then`
    },
    {
        username: `steveQuinn`,
        date: `03-12-2014`,
        age: 35,
        tweet: `u can google ur questions about the world and get the CIA FBI answer or u can add "reddit" to the end of it and learn the truth`
    },
    {
        username: `bonIver`,
        date: `01-12-2021`,
        age: 56,
        tweet: `point to ANY white man & tell me theyre bon iver, id 100% believe it`
    },
    {
        username: `mickeyMouse`,
        date: `07-19-2015`,
        age: 56,
        tweet: `Stimulus: $1400    Me at Disneyland: yeah can I get a bottle of water and a churro please`
    },
    {
        username: `phineasAndFerb`,
        date: `03-14-2017`,
        age: 17,
        tweet: `I like how Doofenshmirtz had very attainable goals. Not world domination. Just the tri state area`
    },
    {
        username: `pretzelLover`,
        date: `08-22-2021`,
        age: 26,
        tweet: `what are some non-deadly things you think would end prince phillip? i’ll start: one drop of a mcdonald’s sprite.`
    },
    {
        username: `findingDory`,
        date: `09-19-2018`,
        age: 24,
        tweet: `its called a deadname because when you say it you die`
    },
    {
        username: `mrsMeowMeow`,
        date: `05-13-2021`,
        age: 16,
        tweet: `cat logic is so simple yet so effective. dont like something? smack it as far away from you as possible. flawless reasoning`
    },
];

//This creates a number variable that is equivilent to the number of items in the array.
var twitterFeedLength = twitterFeed.length;


// This is a loop that will iterate through the array.  
// twitterFeedLength is a number variable that is equivilent to the number of items in the array. 
// This tells to the code to loop the correct amount of times


for (var counter = 0; counter < twitterFeedLength; counter++) {
    // This console log calls on the objects and prints them as they loop
    //The [counter] connected to the twitterFeed section of the object accessor tells the computer to iterate through the twitterFeed array and not through the individual objects
    //The + signs are connecting the objects and are seperated by a string of extra spaces
   console.log(twitterFeed[counter].tweet + `   ` + twitterFeed[counter].username + `   ` + twitterFeed[counter].date);
}


