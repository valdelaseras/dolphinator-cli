export function decode( input ) {
    const binaryArray = [];
    for ( const char of input ) {
        if ( char === ' ' ) {
            binaryArray.push(...[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ]);
        } else {
            binaryArray.push( char === 'e' ? 1 : 0 );
        }
    }

    const byteArray = [];
    for ( let i = 0;  i < binaryArray.length; i += 16 ) {
        byteArray.push(binaryArray.slice(i, i + 16).join(''))
    }

    return byteArray.map( byte =>
        String.fromCharCode(parseInt( byte , 2 )
        )
    ).join('');
}
