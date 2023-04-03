(()=>{

  type UserID =  string | number | boolean;
  let userId: UserID;

  function greeting(userId: UserID) {
    if(typeof userId === 'string') {
      return userId.split('').map(c => c + '*').join('');
    }
  }

  // literal types
  type SizeShirt = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: SizeShirt;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 'sdawdas'; //! error

})()
