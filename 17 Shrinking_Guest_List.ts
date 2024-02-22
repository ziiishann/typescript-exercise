import { group } from "console";

let guest_list :string[] = ['Zeeshan','Mahwish','Shaheen'];

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!.')
// }

let absent_Guest :string = 'Zeeshan' ;
let new_Guest :string = 'Maqsood' ;
guest_list[0] = new_Guest ;

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!.')
// }
console.log(`Mr. ${absent_Guest} is not coming to the party`);
console.log('good news! we find big table so we are inviting 3 more guest');

// added three guest in array
guest_list.unshift('Sir Zia Khan');
guest_list.splice(2 , 0 , 'hoorab');
guest_list.push('zoya');

// printed six guest array
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!.')
}
//sorry message to guest for not inviting
console.log('\nsorry we can not arrange big table, only two people will be invited');

// i removed guests
while(guest_list.length > 2){
    let remove_Guest = guest_list.pop();
    console.log(`sorry Mr. ${remove_Guest}, you are not invited for dinner`);
}
// remaining two invited guest
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nyou are still invited.\n\nThank You!.')
}
// remove all guest from array 
guest_list.splice(0, 2);
console.log(guest_list);