function main()
{
    let palabra="Hello world"; //.... . .-.. .-.. --- / .-- --- .-. .-.. -.. 
    console.log(decodificador(palabra));
}

function decodificador(palabra)
{
    let morse="";
    palabra=palabra.toUpperCase();
    const palabraArreglo = palabra.split('');
    const morseCodeMap = 
    {
        'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
        'F': '..-.', 'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
        'K': '-.-',  'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
        'P': '.--.', 'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
        'U': '..-',  'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
        '.': '.-.-.-', ',': '--..--', '?': '..--..', '!' : '-.-.--',
        '/': '-..-.',  '(': '-.--.',  ')': '-.--.-', '&': '.-...',  ':': '---...',
        ';': '-.-.-.', '=': '-...-',  '+': '.-.-.',  '-': '-....-', '_': '..--.-',
        '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/'
    };
    
    palabraArreglo.forEach((value, index)=>{
        morse=morse+morseCodeMap[value]+" ";
    });
    return morse;
}

main();