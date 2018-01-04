# g.o.a.t-of-goats
Firebase Talk for Google Developers Group
## Who, What, Why am I crying?
This is an application that is built to show off some of the features of firebase. It was lovingly crafted by myself and Cailin Millar using Vue which neither of us knew how to use. I don't know why we do things like this

I'm not going to lie I've done some confusing things here like I've run both firebase init and the vue cli init and merged the two together in a big soupy mess.

## Running Locally

npm install is a good precursor to all this. Firebase tools is also a prereq so npm install that too

### Option 1 
npm start or npm run dev

This uses webpack as part of the vue cli so isn't using the firebase scaffolding and tooling
### Option 2
firebase serve

This serves from the public folder so you're probably going to need to have built it as described below

##Building for Firebase Deploy
They both use webpack to convert from the src folder to the public folder for firebase. 
### Dev Build
webpack --config build/webpack.dev.conf.js

### Production Build
npm build 
which in turn calls "node build/build.js"
