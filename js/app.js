process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    // tutaj treść tego co ma się wykonać w momencie odczytania wejścia.
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim(); //metoda .trim(). Otóż dzięki niej pozbywamy się wszystkich białych znaków z przodu i za tekstem. Znikają wszystkie spacje, tabulatory, entery - pozostaje sam czysty tekst. Wynikiem działania tej funkcji ' hello'.trim() będzie: hello.
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n'); //stdout zwraca wynik
            console.log(process.env);
            process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n'); //stderr przekazuje komunikaty o bledach
        }
    }
});