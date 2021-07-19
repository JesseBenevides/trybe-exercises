#EXERCISE 1
cd /Documentos/Trybe/BLOCO1/unix_tests

#EXERCISE 2
cat > skills2.txt
    Internet
    Unix 
    Bash

#EXERCISE 3
cat >> skills2.txt
    JavaScript
    CSS
    HTML
    React
    Node

#EXERCISE 4
wc -l skills2.txt

#EXERCISE 5
head -n 3 skills2.txt | sort > top_skills.txt 

#EXERCISE 6
cat > phrases2.txt
    Olá, meu nome é Jessé
    Sou aluno da Trybe
    Sou Desenvolvedor web

#EXERCISE 7
grep -i br  phrases2.txt | wc -l

#EXERCISE 8
grep -i -v br  phrases2.txt | wc -l

#EXERCISE 9
    #1
        cat >> phrases2.txt
            Brazil
            EUA
    #2
        echo 'Brazil' phrases2.txt
        echo 'EUA' phrases2.txt

#EXERCISE 10
cat phrases2.txt countries.txt > bunch_of_things

#EXERCISE 11
sort -o bunch_of_things.txt bunch_of_things.txt





