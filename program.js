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
            case '/version':
                process.stdout.write('\nVersion: ' + process.versions.node);
                break;
            case '/language':
                process.stdout.write('\nLanguage: ' + process.env.LANG);
                break;
            case '/sayhello':
                process.stdout.write('hello! :)\n');
                break;
            default:
                process.stderr.write(' Sorry!\n Wrong instruction!\n');
        };
    }
});
