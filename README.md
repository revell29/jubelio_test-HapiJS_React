# Jubelio Test Coding

this application was build with [HapiJS](https://hapi.dev) and [ReactJS](https://reactjs.org)

## Structure

### Backend

- `src/app/modules/` Main CRUD Method
- `src/routes/` All Route API
- `src/server/utils/` Utils Method
- `src/app/repository/` Repository
- `src/database/entities` Main Entity
- `src/database/seed` Seeder Data

### Frontend

- `src/pages/` - All Pages
- `src/component/` - All Component
- `src/routes/` - React router dom
- `src/store/` - State Management (Mobx)

### Backend Setup

- run `yarn install`
- change all important config in `.env`
- run for development `yarn dev`
- run for production `yarn build` & `yarn production`;

### Frontend Setup

- run `yarn install`
- change all important config in `.env`
- run `yarn start`
- for production `yarn build`;

### Import data product from API

- access endpoint `/api/elevenia/getProduct` and wait until product imported.
