(()=>{

  let myDynamicVar: any;

  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';


  myDynamicVar = 'Hello';
  const rta = (myDynamicVar as string).toUpperCase();
  console.log(rta);

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);

})()
