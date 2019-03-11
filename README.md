# PAGANTIS QA TEST

## TEST 1 (Test automation E2E of an HTML/JS Widget)

Simulator

---

## TEST 2 (Test automation of a JSON API)

### How to get running the API

- Install node >= v8.0 in your system (https://www.nodejs.org)
- Checkout the repository: `git clone https://github.com/digitalorigin/pg-qa-assignment`
- Enter pg-qa-assignment/test2 folder: `cd pg-qa-assignment/test2`
- Run: `npm install`
- Run: `npm start`

### API DOCS

Endpoints

Auth Bearer Token: pag4nt1stoken

GET /heroes (Get a heroes list)
GET /heroes/:heroId
POST /fight/addHero - Body: { heroId: '<HERO_ID>' }
POST /fight - Empty body
DELETE /fight

Rules to be tested

- The API should need authentication on every endpoint.
- A fight shouldn't start with less than 2 heroes.
- A fight should not have more than 3 heroes.
- You shouldn't be able to add same hero twice to a fight.
- On fight ending, the winner hero returned should be the one with highest powerlevel. (For simplification, no tie can ocurr, so that all heroes have different powerlevel)
