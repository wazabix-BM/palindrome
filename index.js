const a = [ 'à', 'á', 'â', 'ä' ],
e = [ 'é', 'è', 'ê', 'ë' ],
chri = [ 'í', 'ì', 'î', 'ï' ],
o = [ 'ô', 'ö', 'ò', 'ó' ],
u = [ 'ù', 'ú', 'û', 'ü', 'μ' ],
c = [ 'ç', 'ć', 'c̀', 'ĉ', 'c̈' ];

module.exports.isPalindrome = function ( x ) {
    let array = [];
    let index;

    if ( x == undefined )
        /* isPalindrome ( [ x ] ) */ throw new Error ( '[x] is undefined' );
        
    if ( typeof x !== 'string' ) x = x.toString ();

    if ( x.length == 0 )
        /* isPalindrome ( [ x ] ) */ throw new Error ( '[x] is undefined' );

    x = x.toLowerCase ();

    for ( let k of a ) {
        if ( x.includes ( k ) )
            x = x.replace ( new RegExp ( k, 'g' ), 'a' );
    }

    for ( let k of e ) {
        if ( x.includes ( k ) )
            x = x.replace ( new RegExp ( k, 'g' ), 'e' );
    }

    for ( let k of u ) {
        if ( x.includes ( k ) )
            x = x.replace ( new RegExp ( k, 'g' ), 'u' );
    }

    for ( let k of o ) {
        if ( x.includes ( k ) )
            x = x.replace ( new RegExp ( k, 'g' ), 'o' );
    }

    for ( let k of chri ) {
        if ( x.includes ( k ) )
            x = x.replace ( new RegExp ( k, 'g' ), 'i' );
    }

    for ( let k of c ) {
        if ( x.includes ( k ) )
            x = x.replace ( new RegExp ( k, 'g' ), 'c' );
    }

    for ( let i = 0 ; i < x.length ; i++ ) {
        index = x.slice ( i, i + 1 );

        array.push ( index );
    }

    array.reverse ();
    array = array.join ( '' );

    if ( x === array ) { return true }
    
    else { return false };
}