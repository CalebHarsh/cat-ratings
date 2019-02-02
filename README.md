# Cat GIF Ratings
Rating random cat images. Swip left to love and Swip right to bring the hate.

## Before Starting
A few simple commands to get started.
In bash window enter

````
yarn install
cd client
yarn install
cd ..
````

This will install all necessary dependiences in both client and main.

You will need to create a env.js file in client/src. this will be where you store necessary API Keys and User ID. Should look something like this.

````
export const API_KEY = 'API_Key';
export const USER_ID = 'UserId';
````

Entering in the necessary API_KEY and UserID.

Should be ready to go. Either in client or main folder, if you want to include backend possiblities, run `yarn start` and it should run on your localhost.

##API's 
Used axios for my api calls to 'thecatapi' 
React and redux for my front-end

Made with Create-React-App 

##Future applications
Right now only allows touch commands for swip commands. Hoping to add where when desktop either buttons for commands or mouse movements. 

