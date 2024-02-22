let guest_list :string[] = ['Zeeshan','Mahwish','Shaheen'];

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!.')
// }

let absent_Guest :string = 'Zeeshan' ;
let new_Guest :string = 'Maqsood' ;
guest_list[0] = new_Guest ;
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!.')
}

console.log(`Mr. ${absent_Guest} is not coming to the party`);
console.log('good news! we find big table so we are inviting 3 more guest');
guest_list.unshift('Sir Zia Khan');
guest_list.splice(2 , 0 , 'hoorab');
guest_list.push('zoya');
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!.')
}