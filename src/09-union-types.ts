(()=>{

  let userId: string | number;
  userId = 1;
  userId = 'KOBE456'

  function greeting(myID: string | number) {
    if(typeof myID === 'string') {
      return myID.split('').map(c => c + '*').join('');
    } else {
      return (myID + 2) * 2;
    }
  }

  const a = greeting(457);
  const b = greeting('458KOBE');

  console.log(a, b);

})()
