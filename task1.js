const palindrome = (word) => {
  if (typeof word === 'string' === true) {
    let kataPalindrom = []
    for (let i = word.length - 1; i >= 0; i--) {
      kataPalindrom.push(word[i])
    }

    if (word.toLowerCase() === kataPalindrom.join('').toLowerCase()) {
      return 'Palindrom'
    } else {
      return 'Bukan Palindrom'
    } 
  } else {
    return 'Input harus berupa string'
  }
}

console.log(palindrome('Malam'))
console.log(palindrome(828))
console.log(palindrome('828'))