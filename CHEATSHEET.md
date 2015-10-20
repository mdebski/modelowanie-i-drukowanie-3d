# Jak coś wydrukować - krok po kroku
1. Wytworzyć odpowiedni G-code.
1. Pożyczyć klucze do drukarki od operatorów (s. 2030)
1. Włączyć drukarkę (przełącznik z tyłu po prawej)
1. Wgrać plik .gcode na kartę sd drukarki jednym ze sposobów:
 * przez http -> lp3d-proxy.mimuw.edu.pl -> Upload File. Po wybraniu pliku trzeba zaczekać aż pojawi się "Uploaded OK" (nie tylko "100%"), do tego czasu nic więcej nie klikać!
 * przez usb -> kabel jest po lewej stronie, widać w komputerze jak pendrive. Nie usuwać/nadpisywać innych plików (np. firmware'u)!
1. Przygotować stół i głowicę:
  * Sprawdzić (przy wyłączonych silnikach, w kilku miejscach) że pozycja Z=0 jest rozsądna, ewentualnie poprawić śrubą mikrometryczną po lewej
  * oczyścić stół z ewentualnych śmieci, jak wygląda na brudny to przetrzeć acetonem
  * pokryć stół roztworem ABSu w acetonie (soczkiem) - 2 pśiknięcia na świeży ręcznik, przetrzeć dokładnie
1. Uruchomić drukowanie z pliku - "Play" na wyświetlaczu lcd lub po http. Gcode powinien zawierać ustawienie temperatury i homeowanie (standardowo w slicerze: podgrzanie stołu; home; podgrzanie głowicy)
1. Urwać pincetą wiszący plastik z głowicy tuż przed rozpoczęciem właściwego drukowania.
1. Obserwować uważnie, jak coś pójdzie nie tak to RESET (czerwony przycisk).
1. Jak się udało to zaczekać aż stół wystygnie do 30-40°C, zdjąć wydruk i resztki plastiku, śmieci wyrzucić do torby na dole (hint: M106 S255 - wiatraczek i ustawić stosunkowo nisko i blisko wydruku)
1. Wyłączyć drukarkę, zamknąć szafkę, oddać klucze.

**Gdyby stało się coś złego, zazwyczaj najrozsądniejszym działaniem na szybko jest: podniesienie głowicy wysoko, zebranie tak dużo plastiku jak się da, wyłączenie grzania wszystkiego, mail do mnie**
