# ts-basics
Typescript Basics Dojo

## Useful links
<ul>
<li>NodeJS with npm: https://nodejs.org/en/download/</li>
<li>JavaScript MDN Reference: https://developer.mozilla.org/en-US/docs/Web/javascript</li>
<li>Typescript: https://www.typescriptlang.org/</li>
</ul>

## Topics to cover:
|#|Topic|
|---:|---------------------------|
|1| JS loose-typing |
|2| JS variable declarations |
|3| JS add function |
|4| TS to the rescue |
|5| TS config file|
|6| Declaring simple types & interfaces |
|7| Review pros & cons of TS|

## Useful notes
<ul>
    <li>Clone repo, then install dependencies by running: "npm i"</li>
    <li>Within the tsconfig file, add an include array below the compiler options - this tells the tsc compiler what files to compile into JS, in this case all .ts files within the project directory: "include": ["**/*.ts"]</li>
    <li>You can also specify a target version of JS to compile into within the tsconfig file, this will default to ES6: "target": "ES6"</li>
    <li>The final important config in the tsconfig file we looked as was lib. This sets the libraries that you expect to use within your TS files. E.g. if you were to set target as "ES5" and then write a promise in the TS file, the TS compiler will mark this as an error. To tell it it's OK to use ES6 features, you can uncomment the lib option and pass in an array containing ES6: "lib": ["ES6"]</li>
    <li>Telling TS you can use libraries will not necessarily mean they work in the targeted version of JS. So you may need to bring in some polyfills. A good example is to use npm to install core-js: "npm i core-js --save". Once you've run this command in the terminal, you can import all of the polyfills by adding this to the top of the TS file: "import 'core-js';".</li>
    <li>To run the compiler, you can use: "npx tsc".</li>
</ul>