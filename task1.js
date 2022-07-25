const palindrome = (word) => {
  let kataPalindrom = []
  for (let i = word.length - 1; i >= 0; i--) {
    kataPalindrom.push(word[i])
  }
  return (word.toLowerCase() === kataPalindrom.join('').toLowerCase()) ? 'Palindrom' : 'Bukan palindrom'
}

console.log(palindrome('Malam'))