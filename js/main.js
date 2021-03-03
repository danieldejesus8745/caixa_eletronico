// default values
class defaultValues {

    constructor(hundreds=5000, fiftys=2000, twentys=1000, tens=2000) {

        const banknotes = {
            hundreds,
            fiftys,
            twentys,
            tens
        }


        document.querySelector('#available-banknotes').innerHTML = '';

        // show values
        var balance = 0;
        for (var banknote in banknotes) {
            balance += banknotes[banknote];
            if (banknote == 'hundreds' && banknotes[banknote] != 0) {
                var liElement = document.createElement('li');
                var textNode = document.createTextNode(100);
                liElement.appendChild(textNode);
                document.querySelector('#available-banknotes').appendChild(liElement);
            } else if (banknote == 'fiftys' && banknotes[banknote] != 0) {
                var liElement = document.createElement('li');
                var textNode = document.createTextNode(50);
                liElement.appendChild(textNode);
                document.querySelector('#available-banknotes').appendChild(liElement);
            } else if (banknote == 'twentys' && banknotes[banknote] != 0) {
                var liElement = document.createElement('li');
                var textNode = document.createTextNode(20);
                liElement.appendChild(textNode);
                document.querySelector('#available-banknotes').appendChild(liElement);
            } else if (banknote == 'tens' && banknotes[banknote] != 0) {
                var liElement = document.createElement('li');
                var textNode = document.createTextNode(10);
                liElement.appendChild(textNode);
                document.querySelector('#available-banknotes').appendChild(liElement);
            }
        }

        document.querySelector('#available-balance').innerHTML = `R$ ${balance.toLocaleString('pt-BR')}`;

        // open or close withdraw and deposit windows
        function openWD() {
            var withdraw = document.querySelector('#withdraw');
            var deposit = document.querySelector('#deposit');
            var withdrawForm = document.querySelector('#withdrawing');
            var depositForm = document.querySelector('#depositing');

            withdraw.addEventListener('click', openWithdrawWindow);
            deposit.addEventListener('click', openDepositWindow);

            function openWithdrawWindow() {
                document.querySelector('#deposit-window').style.display = 'none';
                document.querySelector('#withdraw-window').style.display = 'flex';
            }

            function openDepositWindow() {
                document.querySelector('#withdraw-window').style.display = 'none';
                document.querySelector('#deposit-window').style.display = 'flex';
            }

            // withdrawing or depositing
            withdrawForm.addEventListener('submit', function(event) {
                event.preventDefault();

                var hundred = document.querySelector('#withdraw-hundreds').value;
                var fifty = document.querySelector('#withdraw-fiftys').value;
                var twenty = document.querySelector('#withdraw-twentys').value;
                var ten = document.querySelector('#withdraw-tens').value;

                var h100 = banknotes.hundreds-(hundred*100);
                var f50 = banknotes.fiftys-(fifty*50);
                var t20 = banknotes.twentys-(twenty*20);
                var te10 = banknotes.tens-(ten*10);
                var sum = (hundred*100) + (fifty*50) + (twenty*20) + (ten*10);
                if (sum > 2000) {
                    document.querySelector('#limit').innerHTML = 'Withdrawal limit exceeded (Limit: $2000)';
                } else {
                    document.querySelector('#limit').innerHTML = '';
                    new defaultValues(h100, f50, t20, te10);
                    document.querySelector('#withdraw-window').style.display = 'none';
                }

            });

            depositForm.addEventListener('submit', function(event) {
                event.preventDefault();

                var hundred = document.querySelector('#deposit-hundreds').value;
                var fifty = document.querySelector('#deposit-fiftys').value;
                var twenty = document.querySelector('#deposit-twentys').value;
                var ten = document.querySelector('#deposit-tens').value;

                var h100 = banknotes.hundreds+(hundred*100);
                var f50 = banknotes.fiftys+(fifty*50);
                var t20 = banknotes.twentys+(twenty*20);
                var te10 = banknotes.tens+(ten*10);

                new defaultValues(h100, f50, t20, te10);
                document.querySelector('#deposit-window').style.display = 'none';

            });

        }

        openWD();

    }

}

new defaultValues;