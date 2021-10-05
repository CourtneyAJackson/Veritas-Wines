# Veritas Wines

Veritas Wines is a rating app that empowers users to speak their TRUTH. It offers simple to use features that allow users to keep track of their favorite wines using a 1-5 star rating system. Our collection offers a wide variety of hand crafted wines and a page that lists their individual characteristics. After creating an account, users are able to post a new rating, update an existing rating and delete an old rating. "In Vino Veritas."
<br>

## MVP
- Full CRUD interactive React App (create, read, update and delete specific wines)
- Functioning Ruby on Rails back end server 
- User Authentication (sign in / sign up functionality)
- Successful deployment of front end to Netlify
- Successful deployment of back end to Heroku
- Styling with responsiveness
<br>

### Goals

- Sucessfully implement Ruby on Rails backend server
- Functioning user authentication
- Material UI Styling


<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front end interactive application 
|   React Router   | Allows navigation among components and screens |
| Ruby on Rails    | Web application framework to create a backend database |
|  Material UI     | Styling library for React components |

<br>

#### Wireframes
![Home Screen](https://user-images.githubusercontent.com/88299959/136084370-fbb4c31c-14ca-4a89-9764-8d8d4c0146b2.png)
![Wines Screen (1)](https://user-images.githubusercontent.com/88299959/136084443-401d277a-92e8-4764-970a-860cf2816b79.png)
![Register Screen](https://user-images.githubusercontent.com/88299959/136084472-29697b4c-fa0c-48a7-b60f-ac2b775d3a9a.png)
![Sign In Screen](https://user-images.githubusercontent.com/88299959/136084507-45c7683a-fa9a-4892-bed4-a07adbb06eae.png)
![Wine Details Screen (1)](https://user-images.githubusercontent.com/88299959/136084550-a7e2dec5-9b8b-4de6-8361-55a828378a78.png)

#### Component Tree
![Component Tree P4 drawio (1)](https://user-images.githubusercontent.com/88299959/136084244-988784ba-1696-46e9-9f1a-443bd9dc9aa5.png)
#### Component Architecture

``` structure

src
|__ layouts/
      |__ Layout.jsx
|__ components/
       |__ Nav.jsx
       |__ Footer.jsx
|__ containers/
      |__ MainContainer.jsx
|__ screens/
      |__ Register.jsx
      |__ SignIn.jsx
      |__ Reviews.jsx
      |__ ReviewsCreate.jsx
      |__ ReviewEdit.jsx
      |__ WineDetails.jsx
 |__ services/
      |__ auth.js
      |__ config.js
      |__ wines.jsx
 |__ App.jsx     

```

#### Time Estimates

| Task | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Createing Ruby on Rails server| H | 6hrs | hrs | hrs |
| Authentication Functionality | H | 4hrs| hrs | hrs |
| Full Crud front end implementation| H | 5hrs| hr | hr |
| Creating Components| H | 2hrs| hrs | hrs |
|Organizing Components| H | 3hrs| hrs | hrs |
|Creating Homepage| H | 2hrs| hrs | hrs |
|Implementing State/props| H | 4hrs| hrs | hrs |
|Routes/Paths/Links| H | 4hrs| hrs | hrs |
|Css Design| H | 7hrs| hrs | hrs |
|Polish Design| H | 2hrs| hrs | hrs |
|Refactoring code| H | 2hrs| hrs | hrs |
|Testing App| H | 1hr| 3hrs | 3hrs |
| Total | H | 44hrs| hrs | hrs |

<br>


#### ERD Model

![ERD P4 drawio (1)](https://user-images.githubusercontent.com/88299959/136084308-7976a199-6ef6-4ae8-9717-bed591041c58.png)

## Post-MVP
- Create a user forum where users can discuss wines
- Implement pairing suggestions with each wine
- Add a form for users to be able to write out a detailed review
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
