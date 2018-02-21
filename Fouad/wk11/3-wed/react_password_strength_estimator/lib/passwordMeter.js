export default function getStrenght(password) {
  var points = 0

  
  if (password.length >= 8) {
    points += 1
  }
  
  if (/[A-Z]/.test(password)) {
    points += 1
  }
  
  if (/[a-z]/.test(password)) {
    points += 1
  }
  
  if (/\d/.test(password))
    points += 1
  
  if (/\W/.test(password))
    points += 1
  
  if (points === 3) {
    return 'better'
  }
  else if (points === 4) {
    return 'strong'
  }

  else if(points === 5){
    return 'very-strong'
  }

  else {
    return 'weak'
  }
  
}
