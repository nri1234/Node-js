process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write(' Hello!\n Wrong instruction!\n');
                process.stdout.write('\nVersion: ' + process.versions.node);
                process.stdout.write('\nLanguage: ' + process.env.LANG);
        };
    }
});
