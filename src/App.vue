
<template>
 <p>GMO</p>

</template>

<script>

var axios = require('axios');

var config = {
  method: 'get',
  url: '/api' + '/v1/ticker?symbol=BTC',
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

</script>