let intArray = [];
    let realArray = [];

    function saveIntegers() {
      intArray = document.getElementById("intInput").value.split(',').map(Number);
      document.getElementById("intArrayDisplay").innerText = "Current Integer Array: [" + intArray.join(", ") + "]";
    }

    function saveReals() {
      realArray = document.getElementById("realInput").value.split(',').map(Number);
      document.getElementById("realArrayDisplay").innerText = "Current Real Array: [" + realArray.join(", ") + "]";
    }

    function performFunction() {
      const func = parseInt(document.getElementById("functionSelector").value);
      let result = "";

      switch (func) {
        case 1:
          result = intArray.filter(n => n > 0).reduce((a, b) => a + b, 0);
          break;
        case 2:
          result = intArray.filter(n => n > 0).length;
          break;
        case 3:
          result = Math.min(...intArray);
          break;
        case 4:
          const positives = intArray.filter(n => n > 0);
          result = positives.length ? Math.min(...positives) : "No positive numbers";
          break;
        case 5:
          const evens = intArray.filter(n => n % 2 === 0);
          result = evens.length ? evens[evens.length - 1] : -1;
          break;
        case 6:
          const p1 = parseInt(document.getElementById("pos1").value);
          const p2 = parseInt(document.getElementById("pos2").value);
          if (p1 >= 0 && p1 < intArray.length && p2 >= 0 && p2 < intArray.length) {
            [intArray[p1], intArray[p2]] = [intArray[p2], intArray[p1]];
            result = "Swapped: [" + intArray.join(", ") + "]";
          } else {
            result = "Invalid positions";
          }
          break;
        case 7:
          intArray.sort((a, b) => a - b);
          result = "Sorted Array: [" + intArray.join(", ") + "]";
          break;
        case 8:
          result = intArray.find(isPrime);
          result = result !== undefined ? result : -1;
          break;
        case 9:
          result = realArray.filter(n => Number.isInteger(n)).length;
          break;
        case 10:
          const posCount = intArray.filter(n => n > 0).length;
          const negCount = intArray.filter(n => n < 0).length;
          result = posCount > negCount ? "More positive numbers" : (negCount > posCount ? "More negative numbers" : "Equal number of positives and negatives");
          break;
      }

      document.getElementById("result").innerText = "Result: " + result;
    }

    function isPrime(n) {
      if (n < 2 || !Number.isInteger(n)) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    }