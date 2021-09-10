import React from 'react';
import PropTypes from 'prop-types';

//react는 자동적으로 class Component에 render method를 실행, 그 때문에 작성한 것을 화면에 렌더할 수 있는것
class App extends React.Component {

  state = {
    count : 0
  };
  add = () => {
    console.log('add');
    this.setState({count: this.state.count + 1});
  }
  minus = ()=> {
    console.log('minus');
    //react에서 state를 변경할 때, 외부의 상태에 의존하지 않는 가장 좋은 변경 방법. (current => ({state의 값 : current.state의 값 -1 }))
    //add 의 state 변경법은 매우 좋지 않은 방법.
    this.setState(current => ({count : current.count - 1}));

  }
 render() {
   return(
     <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
     </div>
   )
 } 
}

export default App;

//life-cycle method는 react가 component를 생성, 제거 하는 방법이다.
//과거에는 state를 사용하기 위해 class component를 사용하였으나 현재 hook이 나와서 hook을 사용하는 것이 훨씬 좋음.
