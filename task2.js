const balikKalimat = (kalimat) => {
  if (typeof kalimat === 'string' === true) {
    let kata = kalimat.split(' '), kalimatTerbalik = []
    if (kata.length === 1) {
      return kalimat
    } else {
      for (let i = kata.length - 1; i >= 0; i--) {
        kalimatTerbalik.push(kata[i])
      }
      return kalimatTerbalik.join(' ')
    }  
  } else {
    return 'Input harus berupa string'
  }
}

console.log(balikKalimat('Aku belajar Javascript'))
console.log(balikKalimat('Javascript'))
console.log(balikKalimat(1627238))
console.log(balikKalimat('1627238 4838490'))