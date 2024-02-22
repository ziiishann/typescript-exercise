let guest_list :string[] = ['Zeeshan','Mahwish','Shaheen'];
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!.')
}
let absent_Guest :string = 'Zeeshan' ;
let new_Guest :string = 'Maqsood' ;
guest_list[0] = new_Guest ;
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!.')
}

console.log(`Mr. ${absent_Guest} is not coming to the party`)