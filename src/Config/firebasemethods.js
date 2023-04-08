import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { getDatabase, set, ref, onValue, push } from "firebase/database";

  import app from "./FirebaseSetup";
  
  const auth = getAuth(app);
  const db = getDatabase(app);
  
  let SignupUser = (obj) => {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => {
          obj.id = res.user.uid;
          const reference = ref(db, `users/${obj.id}`);
          set(reference, obj)
            .then(() => {
              resolve("Data Send Successfully in Database and User Created");
            })
            .catch((err) => {
              reject(err.message);
            });
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  };


  let loginUser = (obj) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => {
          const reference = ref(db, `users/${res.user.uid}`);
          onValue(reference, (data) => {
            if (data.exists()) {
              resolve(data.val());
            } else {
              reject("Data Not Found :(");
            }
          });
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  };
  let GetData = () => {};
  let GetDataById = (nodeName) => {
    return new Promise( (resolve,reject) =>{
      let refer = ref(db,`${nodeName}/`)
      onValue(refer, (dt) =>{
          if(dt.exists()){
              let a  = Object.values(dt.val()) 
              // console.log(dt.val())
              resolve(a)
          }
      })
  })                                    
  };
  let PostDataById = (nodeName,obj) => {
    return new Promise( (resolve,reject) =>{
      let refer = ref(db,`${nodeName}/`)
      obj.id  = push(refer).key

      const referenc = ref(db,`${nodeName}/${obj.id}`)
      set(referenc,obj)
      .then((succ) =>{
          resolve("data send successfully")
      })
      .catch((err) =>{
          reject(err.message)
      })
  })
  };
  let EditData = () => {};
  let DeleteData = () => {};
  let DeleteUserAll = () => {};
  
  
  export {
    SignupUser,
    loginUser,
    GetData,
    GetDataById,
    PostDataById,
    EditData,
    DeleteData,
    DeleteUserAll,
  };