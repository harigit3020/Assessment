var tweet=["sachin tweet1","sehwag tweet1","kholi tweet1","sachin tweet1","kholi tweet1"];
var obj={};
for(word of tweet){
    if(word in obj){
        obj[word]+=1;
    }else{
        obj[word]=1;
    }
}
for(key1 in obj){
    for(key2 in obj){
        if(obj[key1]>obj[key2]){
            console.log("More tweets by "+key1);
            break;
        }
    } 
    break;
}
