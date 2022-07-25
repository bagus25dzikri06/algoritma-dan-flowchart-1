const balikKalimat = (kalimat) => {
  let kata = kalimat.split(' '), kalimatTerbalik = []
  if (kata.length === 1) {
    return kalimat
  } else {
    for (let i = kata.length - 1; i >= 0; i--) {
      kalimatTerbalik.push(kata[i])
    }
    return kalimatTerbalik.join(' ')
  } 
}

console.log(balikKalimat('Aku belajar Javascript'))
console.log(balikKalimat('Javascript'))