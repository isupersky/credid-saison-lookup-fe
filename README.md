# Welcome

This is an **binlist.net** API implementation.

# Binlist(.)net

binlist.net is a public web service for looking up credit and debit card meta data.

## IIN / BIN

The first 6 or 8 digits of a payment card number (credit cards, debit cards, etc.) are known as the [Issuer Identification Numbers (IIN)](https://en.wikipedia.org/wiki/Payment_card_number#Issuer_identification_number_.28IIN.29), previously known as Bank Identification Number (BIN). These identify the institution that issued the card to the card holder.

# To run

## The deployed Application

go to `http://34.70.30.55:3000/`

## on your Local System

clone the repository on your system.

> git clone https://github.com/isupersky/credid-saison-lookup-fe

> cd credid-saison-lookup-fe

> npm install

> npm start

open a browser and hit `http://localhost:3000/credid-saison-lookup-fe`

## on Docker

Run the following command from inside the Project directory

> docker build -t version:1.0 .

there is a dot(.) at the end of the above command, don't forget that.

> docker run -d -it -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true version:1.0
