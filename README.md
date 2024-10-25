# Rare-Gems

- [Overview](#overview)
- [MVP](#mvp)
- - [Wireframes](#wireframes)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)

<br>

## Overview

**Rare Gems** is a web application that targets sneaker enthusiasts. Allowing users to discover rare sneakers through a super rare curated sneaker databased back by research of past and current markets. This app also allows users to create update and delete their reviews on a rare shoe. 

<br>

## MVP



The **Rare Gems** MVP is to make a full CRUD application both on the frontend and backend. 

### Server (Back End) <!-- omit in toc -->

- Have a **RESTful JSON API**.
  - Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Build a database with 3 tables:
  - Utilize **Rails** to define models for interacting with the database.
  - Implement working controller actions for Full CRUD (`index`, `show`, `create`, `update`, `delete`) between non-User tables 
   
### Client (Front End)

#### Wireframes


![Rare Gems](https://github.com/user-attachments/assets/c8b7cdd7-75c0-45a1-ad32-5f33564fa9d0)

![Raregems2](https://github.com/user-attachments/assets/4b28dfe4-1955-41b2-b546-b4b748b01319)

![RGmoblie2](https://github.com/user-attachments/assets/849d8280-3fb9-4be8-bfe4-a9498b0c6d3d)


![RGmobie](https://github.com/user-attachments/assets/981820b1-5f01-484b-a9e8-dcdcd6370537)


[Figma_Design](https://www.figma.com/file/JTkW27ssKKz5HH2N296WXh/Rare-Gems?node-id=0%3A1)


### Client (Front End) <!-- omit in toc -->

- Have a working, interactive **React** app, built using `npx create-react-app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional or class React components appropriately.
  - Utilize state and props in your components efficiently.
- Consume data from **Ruby on Rails API**, and render that data in components.
- Utilize **React Router**, for client-side routing.
- Demonstrate Full CRUD actions ( `index`, `show`, `create`, `update`, and `delete` ) on the front end.


### Styling <!-- omit in toc -->

- Tailwind style library.

### Deployment <!-- omit in toc -->

- Deploy the fully functional front-end via Netlify.
- Deploy the back-end via Heroku.

<br>

### Goals

- _Reseach rare sneakers,_
- _Create seed data._
- _Full CRUD backend._
- _Full CRUD frontend._
- _Styling and moblie responsive._

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|  React           | _Client facing server._ |
|  React Router    | _Handles routes._ |
|  Tailwind        | _Styling Library._ |
|  Rudy on Rails   | _Backend server._ |


<br>


#### Component Tree


[Component Tree Sample](https://whimsical.com/rare-gems-42Wcq9LPWmQKUuvSnRQoUc)

#### Component Architecture

``` structure

src
|__ assets/
      |__ mockups
      |__ graphics
      |__ images
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Navbar.jsx
      |__ Card.jsx
      |__ LoginForm.jsx
      |__ Signup.jsx
|__ Layouts/
      |__ Layout.jsx
|__ services/
|__ Screens/
      |__ ReveiwCreate.jsx
      |__ ReveiwEdit.jsx
      |__ ReveiwDelete.jsx
      |__ ReveiwDetail.jsx
      |__ Reveiws.jsx
      



```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Seed Data    |    L     |     5 hrs      |     4 hrs     |    4 hrs    |
| Create CRUD Actions |    H     |     5 hrs      |     6 hrs     |    7 hrs    |
| Frontend Components |    L     |     5 hrs      |     5 hrs     |    7 hrs    |
| Create CRUD Actions |    H     |     5 hrs      |     4 hrs     |    5 hrs    |
| Responisveness      |    L     |     5 hrs      |     4 hrs     |    5 hrs    |
| Styling             |    H     |     5 hrs      |     5 hrs     |    5 hrs    |
| TOTAL               |          |     30 hrs     |     28 hrs    |    33 hrs   |

<br>

### Server (Back End)

#### ERD Model


[ERD Sample](https://drive.google.com/file/d/1J50gW4EPcdDW5rsJMsgW_NeeSqiWVdLL/view?usp=sharing)
<br>







