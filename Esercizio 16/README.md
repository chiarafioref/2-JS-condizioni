# ESERCIZIO

Chiedi il saldo attuale e l'importo da prelevare. Prima verifica se l'importo è positivo. Se lo è, verifica se il saldo è sufficiente. Se sì, stampa "Prelievo effettuato" e il nuovo saldo, altrimenti stampa "Saldo insufficiente".

## RAGIONAMENTO

- Chiedi all'utente il saldo attuale
  - SE il saldo è maggiore o uguale a 0
    - Chiedi l'importo da prelevare
      - SE il saldo è maggiore dell'importo da prelevare 
        - stampa "Prelievo effettuato, nuovo saldo:" e il nuovo saldo
      - ALTRIMENTI SE il saldo è minore dell'importo da prelevare
        - stampa "Saldo insufficiente"