function recursionFn( num ) {                    //Recursive Function
    if( !num ) { console.log('error'); return; } //error case
    if( num > 10 ) { return; }                   //exit case
    console.log("Level: ", num );                //level
    num++;                                       //doing work.
    recursionFn( num );                          //recursive case
}