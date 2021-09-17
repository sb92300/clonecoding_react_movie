import React from 'react';

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
  //componentDidMount = 컴포넌트가 렌더링 되고 나서 실행.
  componentDidMount() {
    console.log("component rendered");
  }
  //무언가 업데이트 되는 것이 있을 때 실행하고 렌더링을 함.
  componentDidUpdate() {
    console.log(`update! now state is ${this.state.count}`);
  }
  //컴포넌트가 사라진 직후 실행. 주로 timer나 network 요청 취소 같은 자원해제 작업 실행.
  componentWillUnmount() {
    console.log("bye. see you later"); 
  }
 render() {
   console.log("i am rendering");
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
