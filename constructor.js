function HouseKeeper(name,age,experience,languages){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.languages = languages;
    this.moveSuitcase = function(){
        console.log("May i have your suitcase!!");
        //pickUpSuitcase();
       // move();
    }

}

var houseKeeper1 = new HouseKeeper("angela",23,12,["Mandarin","English"]);
var houseKeeper2 = new HouseKeeper("bangela",24,22,["German","English"]);
//console.log(houseKeeper1);
console.log(houseKeeper2.moveSuitcase());



//making objects and functions inside of it 

var boy1 = {
    name1 :"safayat",
    age: 24,
    language: ["Eng","Math"],
    move:function(){
        console.log("moving");
    }
}
boy1.move();