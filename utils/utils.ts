export default function truncate (str:String,n:number){
    return str?.length >n ? str.substr(0,n-1) + "..." :str;
 }