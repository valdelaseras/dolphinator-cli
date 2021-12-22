export function encode( input ) {
    let result = [];
    let charArray = input.split('');

    charArray.map( ( character ) => {
        if ( character === ' ' ) {
            result.push( character );
        } else {
            const binaryArray = encodeToBinary( character ).split('');
            result.push( binaryArray.map(( str ) => str === '1' ? 'e' : 'E' ).join(''));
        }
    });

    return result.join('');
}

export function encodeToBinary  ( char, padding = 16 ) {
    return char.charCodeAt(0).toString(2).padStart( padding, '0');
}
