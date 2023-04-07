import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
     onAuthStateChanged } from "firebase/auth";
     import { getDatabase, ref, set , onValue } from "firebase/database";
     import app from './firebaseconfig';

const auth = getAuth(app);
const db = getDatabase(app);

let signIn = (obj) =>{
    return new Promise((resolve,reject)=>{
        signInWithEmailAndPassword(auth, obj.email , obj.password)
        .then((res)=>{
            let useRef = ref(db, `users/${res.user.uid}`);
            onValue(useRef,(dt)=>{
                if(dt.exists()){
                    resolve(dt.val());
                }else{
                    reject("No Data Found :(")
                }
            } )
            .catch((err)=>{
                reject(err.message)
            })
        })
    })
}