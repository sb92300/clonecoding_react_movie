import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';

//props 를 argument로 사용하면 Food Component에 입력된 값(fav,test, props)가 object 형식으로 전달
//전달받은 props의 데이터 중 사용하고 싶은 것 하나만 값을 넣고 싶다면 {fav} <- 이런 식으로 중괄호 안에 필요한 값만 사용.
// props에 값은 아무거나 넣어도 됨. (<Food / {여기에 들어가는 값은 다 props 값}>)
//function Food({fav}) {
  // return (
    // <h1>i like {fav}</h1>
  // ) 
// }

function Food({name, image, rating}) {
  return (
    <>
      <h1>i like {name}</h1>
      <h4>{rating} / 5.0</h4>
      <img src={image} alt={name} />
    </>
  )
}

// yarn add prop-types 설치 후 사용 가능.
// import 후 데이터에 대한 값을 체크할 때 사용, number 값인데 string으로 되어 있으면 에러 뜸.
// react docs에서 proptypes 파트 찾아볼 것.
Food.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number
}

const foodLike = [
  { 
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.7
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating: 5.0
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
      rating: 3.2
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating: 4.0
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating: 4.5
  }
]

function App(){

  return (
    <div className="App">
      {foodLike.map((a)=>{
        return (
          <Food name={a.name} image={a.image} key={a.id} rating={a.rating}/>
        )
      })}
    </div>
  );
}

export default App;
