(()=> {

  let isEnable = true;
  // isEnable = 'False'; //!error
  isEnable = false;
  console.log('isEnable:', isEnable);

  let isNew: boolean = false;
  console.log('isNew:', isNew);
  isNew = true;
  console.log('isNew:', isNew);

  const random = Math.random();
  console.log('random:', random);
  // isNew = random > 0.5 ? 'true' : 'false'; //! error
  isNew = random > 0.5
  console.log('isNew:', isNew);

})()

