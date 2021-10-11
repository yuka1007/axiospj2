
<template>
 <p>GMO</p>

</template>

<script>

// var request = require('request');
// console.log(1);
// var options = {
//        'method': 'GET',
//        'url': 'https://api.coin.z.com/public/v1/ticker'
       
      
// //       // 'headers': {
// //       //   'Content-Type': 'application/json;charset=UTF-8h',
// //       //   'Access-Control-Allow-Origin': 'https://api.coin.z.com/public/v1/ticker',
// //         'Access-Control-Allow-Methods': 'GET,POST,PUT:',
// //       //   'Access-Control-Allow-Headers': 'Content-Type:'
// //       }
// };
// // var test;
// console.log(2);

// // test=request(options);
// // console.log(2.5);

// // console.log(test);
// request(options, function (error, response, body) {
//       console.log(3);
//       console.log(body);
//       // if (error) throw new Error(error);
//       //     console.log(4);
//       // console.log(response.body);
//       }
// );


// ----------------------------------------


var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.coin.z.com/public/v1/ticker',
  headers: { 
    'Host': ''
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// ----------------------------------------

// import axios from "axios";
// console.log(1);
// export default {
//   data() {
//     return {
//       info: null,
//     };
//   },
  
//   mounted() {
//     console.log(2);
//     axios
//       .get("https://api.coin.z.com/public/v1/ticker",{
//         // headers: {'Access-Control-Allow-Origin': 'https://api.coin.z.com/public/v1/ticker'},
//         data: {}
//       })
//       .then((response) => (this.info = response));
//       console.log(3);
//   },
  
// };
// console.log(4);


// ----------------------------------------



// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://api.coin.z.com/public/v1/ticker',
//   headers: { 
//     'Access-Control-Allow-Origin': 'https://api.coin.z.com/public/v1/ticker'
//   }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });


// ----------------------------------------


// import axios from "axios";
// export default {
//   data() {
//     return {
//       info: null,
//     };
//   },
//   mounted() {
//     axios
//       .get("https://api.coin.z.com/public/v1/ticker")
//       .then((response) => (this.info = response));
//   },
// };

</script>