let name1 = "selvamani";
let an1 = name1.trim().split("");
let name2 = "jayalakshmi";
let an2 = name2.trim().split("");

let flames = [
  "Friends",
  "Lovers",
  "Affectionate",
  "Marriage",
  "Enemies",
  "Siblings",
];

for (let i = 0; i < an1.length; i++) {
  for (let j = 0; j < an2.length; j++) {
    if (an1[i] == an2[j]) {
      an1.splice(i, 1);
      an2.splice(j, 1);
      --i;
      break;
    }
  }
}
let orignal = an1.length + an2.length;
let index = 0;
while (flames.length > 1) {
    index=(index+orignal-1)%flames.length
    flames.splice(index,1)
   
}
let result=flames[0]
console.log(result);



