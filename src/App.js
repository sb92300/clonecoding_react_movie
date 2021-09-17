import React, {useState, useEffect} from 'react';

function App(){

  const [isLoading, setIsLoading] = useState(true);
  //useEffect = componentDidMount
  useEffect(() => {
    setTimeout(()=> {
      setIsLoading(false);
    }, 3000);
  })

  return (
    <div className="App">
      {isLoading ? "Loading..." : "We are not ready..!"}
    </div>
  );
}

export default App;


//life-cycle method는 react가 component를 생성, 제거 하는 방법이다.
//과거에는 state를 사용하기 위해 class component를 사용하였으나 현재 hook이 나와서 hook을 사용하는 것이 훨씬 좋음.
