var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// // // console.log(Object.keys(data))
var keys = Object.keys(data);

var list = keys.map(function(key){

  var follows = data[key].follows.map(function(item) {
    return data[item].name
  })

  var followedBy =
    Object.keys(data)
      .filter(function(key2){
        return data[key2].follows.includes(key)
      })
      .map(function(follower) {
        return data[follower].name
      })
  return Object.assign({}, data[key], {follows: follows, followedBy: followedBy})
})

console.log(list)



function followsMostPeople(data) {
  let most = 0
  let person
  for (let key in data) {
    let age = data[key].age
    const followsArray = data[key].follows
    if (most < followsArray.length && age > 30) {
      most = followsArray.length
      person = key
    }
  }
  return person
 }

 console.log(followsMostPeople(data))





 

 function followedByMostPeople(data) {
   let newObject = {}
   
   for (let key in data) {
    const followsArray = data[key].follows
    for(let person of followsArray) {
      if(person in newObject) {
        newObject[person] += 1
      } else {
        newObject[person] = 1
      }
    } 
   }

  let peopleWithMostFollower = []
  let count = 0;
  for (let key in newObject) {
    if (newObject[key] >= count) {
      count = newObject[key]
    } 
  }
  for (let key in newObject) {
    if (newObject[key] === count) {
      peopleWithMostFollower.push(key)
    }
  }
  return peopleWithMostFollower
}

// followedByMostPeople(data)
console.log(followedByMostPeople(data))







function followingSomeoneWhoDoesntFollowBack (data) {
  var noFollowBackArray = []
  for (let key in data) {
    const followsArray = data[key].follows
    for (let person of followsArray) {
      if (!data[person].follows.includes(key) && !noFollowBackArray.includes(key)) {
        noFollowBackArray.push(key)
      }
    }
  }
  return noFollowBackArray

}

followingSomeoneWhoDoesntFollowBack(data)