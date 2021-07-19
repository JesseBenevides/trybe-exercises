#EXERCICE 1

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

#EXERCICE 2
cat countries.txt

#EXERCICE 3
less countries.txt

#EXERCISE 4

#EXERCISE 5
grep Brazil countries.txt

#EXERCISE 6
grep -i brazil countries.txt

#proximos ecercicios utilizarão o arquivo phrases.txt criado externamente

#EXERCISE 7
grep -v fox phrases.txt

#EXERCISE 8
wc -w phrases.txt

#EXERCISE 9
wc -l phrases.txt

#EXERCISE 10
touch empty.tbt empty.pdf

#EXERCISE 11
ls -a 

#EXERCISE 12
ls -a *.txt

#EXERCISE 13
ls -a *.tbt *.txt

#EXERCISE 14
man ls