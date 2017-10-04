var os = require('os');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read(); 
    if(input !== null) {
        var [ instruction, value ] = input.trim().split(' '); 
        // var instruction = input.trim(); 
 
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/version':
                console.log(process.versions.node);
                break;
                case '/temp':
                console.log(process.env.TEMP);
                break;
            case '/getOSinfo':
                var OSinfo = require('./OSInfo');
                OSinfo.print();
                break;
            case '/test':
                var OSTime= require('./modules/OSTime');
                const result = OSTime.print(Number(value)); // wynik funkcji
                console.log(result); // wyswietl wynik
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});