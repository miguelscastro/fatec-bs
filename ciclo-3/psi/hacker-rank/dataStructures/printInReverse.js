function reversePrint(no) {
    if(no == null){
        return ; 
    }
    reversePrint(no.next);
    console.log(no.data);
}