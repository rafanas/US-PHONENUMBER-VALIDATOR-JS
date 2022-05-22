function telephoneCheck(str) {
    var regex = /^1\s\d{3}\s\d{3}\s\d{4}|^1\s\(\d{3}\)\s\d{3}\-\d{4}|^1\s\d{3}\-\d{3}\-\d{4}|^1\(\d{3}\)\d{3}\-\d{4}|^1\d{10}|^\d{10}$|^\d{3}\-?\s?\d{3}\-?\s?\d{4}$|^\(\d{3}\)\s?\d{3}\-?\d{4}$/gi
  
  
       return regex.test(str)
  }
  
  telephoneCheck("1 (555) 555-5555");