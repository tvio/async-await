const users = [{
    id: 1,
    name: 'Tom',
    schoolId: 101
},{
    id: 2,
    name: 'Pavla',
    schoolId: 999
}];

const grades = [{
    id: 1,
    schoolId:101,
    grade: 86
},
{
    id: 2,
    schoolId:999,
    grade: 100

},
{
    id: 3,
    schoolId:101,
    grade: 80

}];


const getUser = (id) => {
    return new Promise((resolve, reject)=>{
        const user = users.find((user)=> user.id === id);
        
        if (user) {
            resolve(user);
        } else {
            reject(`Nelze najit uzika s id ${id}`);
        }

    });
};

const getGrades = (schoolId) =>{
    return new Promise ((resolve,reject)=>{
        resolve(grades.filter((grade)=>grade.schoolId === schoolId));
    });
};


const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempUser) => {
        user = tempUser;
        return getGrades(user.schoolId);
    }).then((grades)=>{
        //avarage
        //return string
        let avarage = 0;
        if (grades.length>0){
            avarage = grades.map((grade)=> grade.grade).reduce((a,b)=> a+b)/grades.length;
        }
        return `${user.name} has a ${avarage} in the class`;
      
});
};

//ekvivalent async nize
// ()=>{
// return new Promise((resolve,reject)=>{
//     reject ('this is an error')
    //resolve('Mike')

// })
// }

// async await
const getStatusAlt = async (userId) => {
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);
    console.log(user,grades);
    let avarage = 0;
        if (grades.length>0){
            avarage = grades.map((grade)=> grade.grade).reduce((a,b)=> a+b)/grades.length;
        }
        return `${user.name} has a ${avarage} in the class`;
} 

getStatusAlt(2).then((status)=>{
    console.log(status);
}).catch((e)=>{
    console.log(e);
});

// getUser(1).then((user) => {
//     console.log(user);
// }).catch((e)=>{
//     console.log(e);
// })

// getGrades(101).then((grades) => {
//     console.log(grades);
// }).catch((e)=>{
//     console.log(e);
// })

// getStatus(2).then((status) => {
//     console.log(status);
// }).catch((e)=>{
//     console.log(e);
// })