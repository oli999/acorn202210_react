// import
import React from "react";

//util 은 object 이다.
import util from "./my_modules/util";
import {num, name, isMan, myLongInformation as info} from './my_modules/member';

/*
import Home from './your_modules/Home';
import Game from './your_modules/Game';
import Study from './your_modules/Study';
*/

//폴더명으로 import 해서 사용하면 index.js 에서 export 해준 자원을 사용할수 있다.
import modules from './your_modules';


const App = ()=>{

    //import 된 object 에 있는 함수 사용해 보기 
    util.drill();
    util.sender("hi");

    console.log(num);
    console.log(name);
    console.log(isMan);
    console.log(info);

    modules.Home();
    modules.Game();
    modules.Study();

    return (
        <div className="container">
            <h3>모듈 import, export 테스트</h3>

        </div>
    );
}

// export
export default App;