# Time Frame

[![Build Status](https://travis-ci.com/johnsonfash/timeframe.svg?branch=main)](https://travis-ci.com/johnsonfash/timeframe) ![GitHub package.json version](https://img.shields.io/github/package-json/v/johnsonfash/timeframe)

Javascript date format i.e just now, 1 minute ago, in 3 years, hace 8 meses (local) etc. fast, 1kb size, no dependency.

More Examples:

- 1 minute ago
- 2 months ago
- in 3 months
- just now
- 4 years ago

# 🚀 Demo

- [Notification](https://johnsonfash.github.io/timeframe/notification.html)[](https://johnsonfash.github.io/onscroll-animation/3d-box.html)[](https://johnsonfash.github.io/onscroll-animation/articles.html)

# ⚙ Install

**Option A. NPM install**

```javascript
npm install timeframe --save
```

**Option B. Use CDN**

You can load timeframe directly from jsDelivr CDN.

`https://cdn.jsdelivr.net/npm/timeframe@latest/dist/timeframe.bundle.js`

For example, place this in your HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/timeframe@latest/dist/timeframe.bundle.js"></script>
```

**Option C. Copy code from file**

Copy the [timeframe.js](https://github.com/johnsonfash/timeframe/tree/master/src/timeframe.js) file containing only few lines of code to your project, and load it.

```html
<script src="timeframe.js"></script>
```

# 👷 Use

```javascript
import TimeFrame from 'timeframe';

const date = new TimeFrame('2020-05-17T03:24:00');
//const date = new TimeFrame(1589682240); unix

date.startingDate('2020-01-10T04:04:05');

// date.language('es');  spanish

date.language('en');  // english

console.log( date.moment() );
//  in 4 months

console.log( date.unix() );
//  1589682240
```

`new timeFrame()`  accepts all argument that a regular Date method can, including unix time digit.

if you do not specify a `startingDate`, timeFrame automatically uses the current time for comparison.

# ⎔ Other functionality

```javascript
const date = new TimeFrame('2020-05-17T23:24:00');
  
  console.log( date.now() );
  // returns the current milliseconds rather that the argument passed into TimeFrame
  //  1611501800638
  
  console.log( date.unix() );
  // 1589754240
  // returns unix time interger of passed argument since january 1st 1970
  
  console.log( date.milliseconds() );
  // 0
  // returns milliseconds of passed argument

 console.log( date.seconds() );
 // 0
 // returns seconds in passed argument
 
 console.log( date.minutes() );
 // 24
 //returns minutes in passed argument
 
 console.log ( date.hours().long(), date.hours().short() );
 // 23, 11
 //returns hours in passed argument

  console.log ( date.ampm() );
 // pm
 //returns am or pm in passed argument
 
 console.log( date.day() );
 // 17
 //return the day in passed argument
 
 console.log( date.month() );
 // May
  //return the month in the passed argument
 
 console.log( date.year() );
 // 2020
  //return the year in passed argument
```

# 话 Locales

You can also format date and time in your local language without the use of a library.

If no argument is matched, the "default language" is used, and the default language is `"en"`.

```javascript
const date = new TimeFrame('2020-05-17T03:24:00');
  
date.language('en'); // English

date.language('ru'); // Russian

date.language('de');  // German

date.language('th');  // Thai

date.language('es');  // Spanish
  // hace 8 meses
  // search for your language short code and pass it in. The last language code passed will be used.
```

# Future

When future date are provided, `moment()`  return results like:

```javascript
const date = new TimeFrame('2021-05-17T03:24:00');
  console.log( date.moment() );
  //  in 3 months
```

# License

[MIT](https://github.com/johnerry/javascript-timeframe/tree/master/LICENSE)