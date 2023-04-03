(()=>{

  //let myNumber: number;
  //let myString: string;

  let myNull: null = null; // 🧐❌
  let myUndefined: undefined = undefined; // 🧐❌

  let myNumber: number | null = null; // ✅
  let myString: string | undefined = undefined; // ✅

  function hi(name: string | null = null) {
    if(name) {
      const salute = `Hi, ${name}`;
      return salute;
    }
    const salute = 'Hello!!';
    return salute;
  }
  console.log(hi());

  function hello (name: string | null){
    let hi = 'Hi';
    return hi += name?.toLowerCase() || '!!';
  }

  console.log(hello(null));
  console.log(hello(', JEFFER'));

})()
