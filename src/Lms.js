import React from 'react';

const Item = () => {

};
const items = [];

ItemList.propTypes = {
  items: 
}
/* eslint-disable require-jsdoc */
// // good
// // eslint-disable-next-line require-jsdoc

// // fuction name with a descriptive name
// function query() {
//   // ...
// }

// // naming objects and funtions with camelCase
// const thisIsMyObject = {};
// function thisIsMyFunction() {}

// // naming class with PascalCase
// class User {
//   constructor(options) {
//     this.name = options.name;
//   }
// }

// const good = new User({
//   name: 'yup',
// });




// //file with a default export
// class CheckBox {
//   // ...
// }
// export default CheckBox;

// // good
// import CheckBox from './CheckBox'; // PascalCase export/import/filename

// export query;

// best
// eslint-disable-next-line import/no-unresolved


// import { es6 } from './ImportExample';

// export default es6;



function ItemList(props) {
  return (
    <ul>
      {props.items.map(item => (
        <Item
          key={item.key}
          item={item}
        />
      ))}
    </ul>
  );
}

// self-closed tag with no children
<Foo variant="stuff" />
