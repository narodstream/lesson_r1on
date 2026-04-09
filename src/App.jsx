import './index.css';

function App() {
  const array = [{ hello: 'world' }, { hello: 'world2' }];
  
  // const arrayReactElements = [];

  // const result = array.map((obj) => {
  //     return (
  //         <p>{obj.hello}</p>
  //     );
  // });

  // console.log(result);


  // array.forEach((obj) => {
  //     arrayReactElements.push(
  //         <p>{obj.hello}</p>
  //     );
  // });

  // for (let i = 0; i < array.length; i++) {
  //     const obj = array[i];

  //     arrayReactElements.push(
  //         <p>{obj.hello}</p>
  //     );
  // }

  // console.log(array);
  // console.log(arrayReactElements);
  
  
  return (
    <>
      {/* {arrayReactElements} */}
      {/* {array.map((obj) => {
        return (
            <p>{obj.hello}</p>
        );
      })} */}

      {array.reduce((acc, obj) => {
          acc.push(
              <p>{obj.hello}</p>
          );

          return acc;
      }, [])}
    </>
  )
}

export default App
