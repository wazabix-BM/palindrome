module.exports.isPalindrome = function ( x ) {
    let array = [];
    let index;

    if ( x == undefined )
    /* isPalindrome ( [ x ] ) */   throw new Error ( '[x] is undefined' );
        
    if ( typeof x !== 'string' ) x = x.toString ();

    for ( let i = 0 ; i < x.length ; i++ ) {
        index = x.slice ( i, i + 1 );

        array.push ( index );
    }

    array.reverse ();
    array = array.join ( '' );

    if ( x == array ) return true;
    
    else return false;
}