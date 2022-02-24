# Rare-Gems

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Rare Gems** is a web application that targets sneaker enthusiasts. Allowing users to share their interests in rare sneakers by allowing them to discovery rare sneakers or share and update their reviews on a rare shoe. 

<br>

## MVP



_The **Rare Gems** MVP is to make a full CRUD application both on the frontend and backend. 

### Server (Back End) <!-- omit in toc -->

- Have a **RESTful JSON API**.
  - Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Build a database with 3 tables:
  - Utilize **Rails** to define models for interacting with the database.
  - Implement working controller actions for Full CRUD (`index`, `show`, `create`, `update`, `delete`) between non-User tables 
   

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

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|  React           | _Client facing server._ |
|  React Router    | _Handles routes._ |
|  Tailwind        | _Styling Library._ |
|  Rudy on Rails   | _Backend server._ |


<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Full Figma Design](https://www.figma.com/file/JTkW27ssKKz5HH2N296WXh/Rare-Gems?node-id=0%3A1)

#### Component Tree


[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ mockups
      |__ graphics
      |__ images
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Seed Data    |    L     |     5 hrs      |     TBD       |     TBD     |
| Create CRUD Actions |    H     |     5 hrs      |     TBD       |     TBD     |
| Frontend Components |    L     |     5 hrs      |     TBD       |     TBD     |
| Create CRUD Actions |    H     |     5 hrs      |     TBD       |     TBD     |
| Responisveness      |    L     |     5 hrs      |     TBD       |     TBD     |
| Styling             |    H     |     5 hrs      |     TBD       |     TBD     |
| TOTAL               |          |     30 hrs     |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1J50gW4EPcdDW5rsJMsgW_NeeSqiWVdLL/view?usp=sharing)
<br>

***

## Post-MVP


***

## Code Showcase


## Code Issues & Resolutions


