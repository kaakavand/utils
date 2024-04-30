 async function webService(reqBody) {
  try {
    let res = await Axios({
      method: 'post',
      url: '',
      data: reqBody
    });
  
    let data = res.data;
    return data;
  } catch (error) {
    console.log(error.response); // this is the main part. Use the response property from the error object
    
    return error.response;
  }
}