#Dashboard

- '/'
  - statystyki dzisiejszych zamowien(zdalne i likalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

#Logowanie (podstrona)

- '/login'
  - pola na login i haslo
  - guzik do zalogowania (link do dashbordu)

#Widok dostepnosci stolikow

- '/tables'
  - wybor daty i godz.
  - tabela z lista rezerwacji i wydarzen
    - kazda kolumna - 1 stolik
    - kazdy wiersz - 30 minut
    - przypomina widok tyg. w kalendarzu Google, gdzie w kolumnach zamiast dni sa stoliki
    - po kliknieciu rezerwacji lub eventu przechodzimy na strone szczegolow
- '/tables/booking/:id'
  - zawiera wszystkie inf. dotycz. rezerwacji
  - pozwala na edycje i zapisanie zmian
- '/tables/booking/new'
  - jak wyżej, ale bez inf. poczatkowej
- '/tables/events/:id'
  - jak wyżej, dla eventow
- '/tables/events/new'
  - jak wyżej, dla eventow, ale bez inf. poczatkowej

#Widok kelnera

- '/waiter'
  - tabela
    - w wierszach stoliki-  w kolumnach rozne rodz. informacji (status, czas od ostatniej aktywnosci)
    -  w ostatniej kolumnie dostepne akcje dla danego stolika
- '/waiter/order/new'
  - numer stolika (edytowalny)
  -  menu produktow
  -  opcje wybranego produktu
  - zamowienie (zamowione produkty z opcjami i cena)
  -  kwota zamowienia
- '/waiter/order/:id'
  - jak powyzej

#Widok kuchni

- '/kitchen'
  - wyswietla liste zamowien w kolejnosci ich zlozenia
  -  lista musi zawierac:  
    -  numer stolika (lub zamowienia zdalnego)
    -  pelne informacje dotycz. zamowionych dan
  - na liscie musi byc mozliwosc oznaczenia zamowienia jako zrealizowane