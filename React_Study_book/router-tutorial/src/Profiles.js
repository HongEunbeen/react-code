import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Profile from './Profile';
//import WithRouterSample from './WithRouterSample';

const Profiles = () => {
    const activeStyle = {
        background : 'black',
        color : 'white'
    }
    return(
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/velopert">
                        velopert
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/gildong">
                        gildong
                    </NavLink>
                </li>
            </ul>

            <Route 
                path="/profiles"
                exact
                render={() => <div>사용자를 선택해 주세요.</div>}
            />
            {/*compoenet 대신 render props -> 컴포넌트 자테를 전달하는 것이 아니라 보여주고 싶은 JSX 넣어줄 수있다.*/}
            {/*JSX에서 props 설정 시 값 생략하면 자동으로 true 설정  exact == exact={true}*/}
            <Route path="/profiles/:username" component={Profile}/>
            {/* <WithRouterSample/> */}
            {/*match 객체의 params 값이 나오지 않는다.profiles이고 username이 없기에... */}
        </div>
    );
};

export default Profiles;
