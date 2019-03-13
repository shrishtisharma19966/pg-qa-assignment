# PAGANTIS QA ASSIGNMENT

## About this test
The purpose of this is to see how would you write test scenarios and automated them. Do it like it was for real. Follow your code conventions but make it coherent through all the code you write.


## Feature 1 (Test automation functional testing of an HTML/JS Widget)

Pagantis offers a product called Paga+Tarde that allows consumers to pay for goods and services in monthly installments. This product is integrated into different e-commerce merchants where the consumer can make a purchase financed after a paperless process.
So, in order to the consumer evaluates which installment is better, we use a simulator that given the shopping cart amount and the interests then returns the total amount to be paid for the installment selected.

To test this feature, please access to the folder `test1` and open the `index.html` file in your browser. Once it is done, we want you to automate functional testing using a BDD framework with underlying webdriver layer for all the cases that you think should be automated.

## Feature 2 (Test automation of a JSON API)

As we can not expose our APIs, we've thought let's prepare something ;).
In this section, you will have a simple API REST available where you can interact with different endpoints. 
The context is easy: you will have a list of heroes so you can send them to fight and see the final winner!

We want you to automate this API using the tool/language that you prefer.

Well, previously you should run the API on your local machine so please follow these instructions:

### How to get running the API

- Install node >= v8.0 in your system (https://www.nodejs.org)
- Checkout the repository: `git clone https://github.com/digitalorigin/pg-qa-assignment`
- Enter pg-qa-assignment/test2 folder: `cd pg-qa-assignment/test2`
- Run:
```bash
~ $ npm install
~ $ npm start
```
 - Access to `localhost:3000`

### JSON API docs

Before you start writing the test cases, you should know how the API works:

All the endpoints requires the following authentication:
```
Auth Bearer Token: pag4nt1stoken
```
The first endpoint returns the list of heroes
```
GET /heroes
result: JSON array - [ { id, name, powerlevel }, ... ]
```
If you want to get one hero: format 
```
GET /heroes/:heroId
result: JSON object - { id, name, powerlevel }
```
Add a hero to fight:
```
POST /fight/addHero
body: { heroId: '<HERO_ID>' }
result: { message } 
```
Make them fight:
```
POST /fight
body: empty
result: { message }
```
And finally reset the fight:
```
DELETE /fight
body: empty
result: { message }
```

Rules:

- A fight should not start with less than 2 heroes.
- A fight should not have more than 3 heroes.
- You should not be able to add same hero twice to a fight.
- On fight ending, the winner hero returned should be the one with highest powerlevel. (For simplification, no tie can ocurr, so that all heroes have different powerlevel)

## Delivery
The delivery can be in a single compressed file or in a public version control system. It should contain all required documentation about how to install, configure and execute the tests.
