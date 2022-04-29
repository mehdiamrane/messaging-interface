# Making of the messaging interface

You can check out the webapp here: https://messaging-interface.vercel.app

## Running locally

- Clone the repo
- Type `npm install` to install dependencies.
- Type `npm prepare` to configure husky git hooks.
- Create a `.env` file with the content of the `.env.example` file.
- Type `npm run start-server` in a terminal, and `npm run dev` from another.
- Your server is now on http://localhost:3005, and your next.js app on http://localhost:3000.

## Thought process

- I first started by reading the requirements, taking a look at the code, and making a list of features and packages I needed or wanted to implement.
- I then made a quick wireframe on paper to shape the interface of the application.
- Finally, I started to code the application.

## Steps

- Set up the relevant tooling to build the application in a team-based environment.
  - husky, eslint + stylelint, jest + react-testing-library, commitizen, i18n.
- Add styled-components with a custom theme to build components and the UI.
- Create components for the skeleton of the app (Layout, Main, Aside, Header, Footer).
- Work on the essential UI components of the application (conversations sidebar, and messaging area), using fixture data as I didn't implement the api calls yet.
- Create a reusable axios instance with api calls, and add utility functions to easily handle received data.
- Complete the interface with the possibility of sending a message in a conversation.
- Handle 500 errors and 404 errors by redirecting to a simple error page. Handle errors when sending a message by showing an error banner.
  - Pro tip: try sending a message with the keyword "error" in it to trigger a fake error.
- Add tests. Most of the code-coverage is from snapshot-based tests, even though I added more specific unit tests when needed.
- Host the server on render.com and the webapp on vercel.com to showcase it on my GitHub profile ;)
- Write the README.

I took me approximately 4 hours to set up the tooling (linting, testing, husky, jest, styled-components theme).
I took me approximately 14 hours to build the app, deploy it, and add testing.
For a total of 18 hours.

## Potential improvements

- Doing too many snapshot-based tests is not considered a good practice, but I didn't have too much time to spend on tests unfortunately.
- I tend to give lengthy names to my variables and components.
- My husky configuration is way too aggressive, and I should have added the lint-staged package.
- I didn't have time to start implementing Bonus #1.
- Messages don't auto-refresh on the interface, we just make a get request when successfully sending a message. Sometimes it fails getting the latest message, and won't work in case of an other user sending a message. Other solutions could be polling or receiving events from a web socket connection, but the server isn't configured that way.
- I used getServerSideProps to fetch data, but in retrospect I don't think that it's the best choice.

<details>
  <summary>Click to see the original readme with requirements.</summary>

# Context :

At leboncoin, our users can share messages about a transaction, or ask for informations about any products.

Your job is to create the interface to consult those messages.
The interface needs to work on both desktop & mobile devices.

In addition to your code, a README explaining your thought process and your choices would be appreciated.

# Exercice :

- Display a list of all the conversations
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users.
  - As a user, you can type and send new messages in this conversation

**As your application can be used by millions of users, make sure to provide some robust safety guards.**

### Sketches :

Obvisouly, it is up to you to make something nice and pretty, you are free to design it the way you like. The sketches are here to give you an idea on how it should look.

<details>
  <summary>Click to see the sketches</summary>
  
Mobile list :

![](./sketches/list-mobile.jpg)

Desktop list :

![](./sketches/list-desktop.jpg)

Mobile conversation :

![](./sketches/conv-mobile.jpg)

Desktop conversation :

![](./sketches/conv-desktop.jpg)

</details>

### API :

You can find the API swagger file in `docs/api-swagger.yaml`.

For a better readibility, you can view it on [https://leboncoin.tech/frontend-technical-test/](https://leboncoin.tech/frontend-technical-test/).

---

## Bonus 1 :

We provide some conversation samples, but can you improve the app so the user can now create new conversations ?

## Bonus 2 :

Our infrastructure is a bit shaky.. Sometimes the servers are crashing. “It’s not you, it’s me”, but maybe you can display something nice to warn the user and handle it gracefully.

## Do you want to make the app even better ?

Feel free to make as many improvements as you like.
We love creativity and technical challenges.

If you are out of ideas, here are some thoughts :

- As we want to reach our users anywhere, we need to make sure the app is performing well. What can you do to make it really fast ?

- Our goal is to support everybody in the country, including people with disabilities. As a good citizen and a good developer, can you make sure the app is accessible for everyone ?

- We all love to relax after a hard day’s work. It would be a shame if we didn’t feel confident enough about the upcoming automatic deployment. Are you sure everything has been tested thoroughly ?

</details>
