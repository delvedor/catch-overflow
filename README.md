# catch-overflow
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Catch your errors and search them instantaneously on Stack Overflow!

## Install
```
npm i catch-overflow --save-dev
```

## Usage

```js
const catch = require('catch-overflow')

catch(function () {
  // your code here
}, [args], [context]) 
// args is an array of arguments you want to pass to your function
```

## Contributing
If you feel you can help in any way, be it with examples, extra testing, or new features please open a pull request or open an issue.

The code follows the Standard code style.  
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License
**[MIT](https://github.com/delvedor/catch-overflow/blob/master/LICENSEM)**

*The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and non infringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.*

Copyright © 2017 Tomas Della Vedova
