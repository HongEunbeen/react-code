import React from 'react';
import {withRouter} from 'react-router-dom';

const WithRouterSample = ({location, match, history}) => {
  return (
    <div>
        <h4>location</h4>
        <textarea
            value={JSON.stringify(location, null, 2)}
            rows={7}
            readOnly={true}
        />
        
        <h4>match</h4>
        <textarea
            value={JSON.stringify(match, null, 2)}
            rows={7}
            readOnly={true}
        />

        <button onClick={() => history.pushState('/')}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample);
//withRouter를 사용할때는 컴포넌트를 내보내 줄 때 함수로 감싸준다.
//JSON.stringify(location, null, 2) -> null, 2 를 설정해주면 JSON에 들여쓰기가 적용된 상태로 문자열 만들어 진다.
