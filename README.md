# Cryptochasers

![CryptoChasers](https://i.ibb.co/3zxZ0JC/GladTube.png)

CryptoChasers is a cryptocurrency tracker built using React, Tailwind and Firebase. It is based on Code Commerce's [YouTube Tutorial.](https://www.youtube.com/watch?v=AcYhi08e404)

## What are the features of CryptoChasers

Users can sign-in or sign-up to register a new account to access the app. Although signing-in is not required to use the app, users must sign-in to add coins to their watchlist. The app fetches the top 250 cryptocurrencies in real-time from coingecko API, which is paginated to display only 10 results per page. Users can filter through the results to look for specific coins, and they can also view other details related to the coin they are viewing. Additionally, there is a trending panel that displays the top trending coins on Coin Gecko. The app allows users to choose between light or dark mode as a theme, and users can also log out.

## What went well

The tutorial strengthened my understanding of core react concepts, firebase authentication and storage, contextAPI, and the flexibility of tailwind CSS.

## What are the challenges encountered

The main challenge was deployment, as the initial deployment to Github did not display the fetched coins on the homepage. This was fixed by deploying the app to free-tier hosting on Render.

## Codebase differences

Increased coins fetched to 250 instead of just 10 in Clint' tutorial. Then I proceeded to implement the [react-pagination](https://www.youtube.com/watch?v=HANSMtDy508) that I learned from Pedrotech. Also improved the filter logic to get rid of the array prototype error with the assistance of ChatGPT.

Styling wise, changed the display of Sign In and Sign Up buttons in the mobile menu to hidden when there is a user present.

## Future improvements

One of the future plans for improving the app is to enhance the user experience by enabling users to update their information and improving how their information is displayed.

### Liked this repository?

Please don't forget to leave a ⭐🙏🏻!

## Run this app on your local machine

In order to run this application on your local machine, you can run the following commands on the terminal:

### `yarn`

Installs the required package dependencies

### `yarn start`

Runs the client in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
