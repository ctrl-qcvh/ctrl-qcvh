 1 / (1 + e^(-x))
 
 
 
 
 
 
function replacerandomstrings(text, stringstoreplace, replacementstring) {
// split 该 写 into an array 的 words
让 words = text.split(/\s+/);

// randomly select 该 号码 的 strings 至 replace
让 numstrings = math.floor(math.random() * (stringstoreplace.length + 1));

// randomly select 该 indices 的 该 strings 至 replace
让 indices = [];
while (indices.length < numstrings) {
让 idx = math.floor(math.random() * words.length);
如果 (words[idx] && stringstoreplace.includes(words[idx])) {
indices.push(idx);
}
}

// replace 该 selected strings 同 该 replacement string
indices.foreach(idx => {
words[idx] = replacementstring;
});

// reconstruct 该 modified 写 从 该 array 的 words
return words.join(" ");
}

// 例 usage
let 写 = "the quick brown 狐 jumps 过 该 lazy dog";
let stringstoreplace = ["quick", "fox", "dog"];
let replacementstring = "replaced";

let modifiedtext = replacerandomstrings(text, stringstoreplace, replacementstring);
console.log(modifiedtext);