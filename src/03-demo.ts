// const url = 'http://localhost:3000'; // ! Error scope
const url2 = 'http://localhost:3001';

// * en la mayoria de freanworks, no sucede este error

(()=>{
  const url = 'http://localhost:3000';
})();
