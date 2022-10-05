# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



1.将设计好的UI划分组件层级
-App: render background image, header and content
    -Header: render layout of header
        -Logo 
        -RealTime
        -Search
    -Content: render layout of local weather, OtherCities and forecast
        -LocalWeather: render background image and local weather,layout of forecast and city name
            -Weather: render weather, layout of temperature, main weather, humidity and wind
                -Temperature: render value with icon
                -MainWeather: render value
                Flex
                -WeatherItem: render WeatherItem humidity, layout of title and value
                border
                -WeatherItem: render wind
            -CityName: render value with a fancy border bottom     
        <!-- -TwitterFeed: render twitter icon, twitter feedback title and list of feedback, next button
            -FeedbackItem
                -Customer Photo: render customer Photo
                -Customer Review: render customer review
            -NextButton: render title and arrow button -->
        -OtherCities: render section with title and list of city weathers
            -Section: render layout of title and list of city weathers
                -CityWeather: render city weather
                    -City: render value
                    -Temperature: render value with icon
                    -WeatherIcon: render weather image by icon value
        -Forecast: render section with title and list of daily weathers
            -Section:render layout of title and list of daily weathers
                -DailyWeather: render daily weather
                    -Day
                    -WeatherIcon: render weather image by icon value
                    -Temperature: render value with icon

 -Temperature:
 -WeatherIcon:
 -Section: layout of title and something

 2.用React创建一个静态版本
 3.确定的UI State的最小（且完整）表示
