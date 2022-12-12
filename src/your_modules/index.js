// your_modules/index.js

// index.js 파일에서 필요한 모듈을 import 해서 
import Home from './Home';
import Game from './Game';
import Study from './Study';

// object 에 담은 다음 
let obj={Home, Game, Study};

// 한번에 default 로 export 해주면 사용할때 폴더명으로 import 해서 사용할수 있다. 
export default obj;
