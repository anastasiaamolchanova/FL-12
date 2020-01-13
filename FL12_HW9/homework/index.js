  /* eslint-disable no-magic-numbers */

  //1

  function convert() {
      let myArr = [];
      for (let index = 0; index < arguments.length; index++) {
          if (typeof arguments[index] === 'string') {
              arguments[index] = parseInt(arguments[index]);
          } else if (typeof arguments[index] === 'number') {
              arguments[index] = arguments[index].toString();
          }
          myArr.push(arguments[index]);
      }
      return myArr;
  }
  console.log(convert('2', 5, '5'));

  //2

  function executeforEach(arr, func) {
      for (let i = 0; i < arr.length; i++) {
          func(arr[i]);
      }
  }

  executeforEach([1, 2, 3], function (el) {
      console.log(el * 2);
  });

  //3

  function mapArray(arr, func) {
      let newArray = [];
      executeforEach(arr, function (el) {
          newArray.push(func(parseInt(el)));
      });
      console.log(newArray);
  }

  mapArray([2, '5', 8], function (el) {
      return el + 3;
  });

  //4

  function filterArray(arr, func) {
      let filteredArr = [];
      executeforEach(arr, function (el) {
          if (func(el)) {
              filteredArr.push(el);
          }
      });
      console.log(filteredArr);
  }

  filterArray([2, 5, 8], function (el) {
      return el % 2 === 0;
  });

  //5

  function flipOver(str) {
      let reversed = '';
      for (let character of str) {
          reversed = character + reversed;
      }
      return reversed;
  }

  console.log(flipOver('hey world'));

  //6 

  function makeListFromRange(nums) {
      let list = [];
      for (let i = nums[0]; i <= nums[1]; i++) {
          list.push(i);
      }
      return list;
  }

  console.log(makeListFromRange([2, 7])); // [2, 3, 4, 5, 6, 7]

  //7

  const actors = [{
          name: 'tommy',
          age: 36
      },
      {
          name: 'lee',
          age: 28
      }
  ];

  function getArrayOfKeys(arrName, arrKey) {
      let actorsArr = [];
      executeforEach(arrName, actor => actorsArr.push(actor[arrKey]));
      return actorsArr;
  }

  console.log(getArrayOfKeys(actors, 'name'));

  //8

  function substitute(arr) {
      let numArray = [];
      mapArray(arr, function (el) {
          if (el < 30) {
              el = '*';
          }
          numArray.push(el);
      });
      return numArray;
  }

  console.log(substitute([58, 14, 48, 2, 31, 29]));

  //9

  const date = new Date(2019, 0, 2);

  function getPastDay(date, day) {
      let mlSecs = 86400000;
      return new Date(date.getTime() - day * mlSecs).getDate();
  }

  console.log(getPastDay(date, 1));
  console.log(getPastDay(date, 2));
  console.log(getPastDay(date, 365));

  // 10

  function formatDate(dateData) {
      const ten = 10;
      const hour = dateData.getHours() < ten ? '0' + dateData.getHours() : dateData.getHours();
      const mins = dateData.getMinutes() < ten ? '0' + dateData.getMinutes() : dateData.getMinutes();
      return `${dateData.getFullYear()}/${dateData.getMonth() + 1}/${dateData.getDate()} ${hour}:${mins}`;
  }

  formatDate(new Date('6/15/2018 09:15:00')); // "2018/6/15 09:15"
  formatDate(new Date()); // "2020/1/7 12:56" // gets current local time