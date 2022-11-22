const evenOrOdd = () => {
  const value = parseInt(document.getElementById('evenField').value);
  if (value) {
    document.getElementById('console-log').innerHTML = "<br />" + `${value} is an ${ value % 2 == 1?'odd':'even'} number next 10 digit will be`

    const arr = [...Array(10).keys()];

    const result = arr.reduce((acc, item, index) => {
      const nextNum = index > 0 ? parseInt(acc[index]) + 2 : parseInt(acc) + 2;

      document.getElementById('console-log').innerHTML += "<br />" + `Number ${index+1} is ${acc[index]}`
      return [...acc, nextNum];
    }, [value + 1])
  } else {
    document.getElementById('console-log').innerHTML = ''
  }



}