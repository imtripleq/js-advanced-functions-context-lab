/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
  let eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  let payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

// Your code here

function createEmployeeRecord([firName, famName, ti, payRate]) {
  return {
    firstName: firName,
    familyName: famName,
    title: ti,
    payPerHour: payRate,
    timeInEvents: [],
    timeOutEvents: [],
  };
}

const runTest = createEmployeeRecord(["Dennis", "Khor", "Mr", 1]);
console.log(runTest.firstName);

function createEmployeeRecords(array1) {
  return array1.map((a) => {
    return createEmployeeRecord(a);
  });
}

function createTimeInEvent(datestamp) {
  const [date, hour] = datestamp.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });
  return this;
}

function createTimeOutEvent(datestamp) {
  const [date, hour] = datestamp.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  });
  return this;
}

function hoursWorkedOnDate(b) {
  const inTime = this.timeInEvents.find((e) => {
    return e.date === b;
  });
  const outTime = this.timeOutEvents.find((e) => {
    return e.date === b;
  });

  return (outTime.hour - inTime.hour) / 100;
}

function wagesEarnedOnDate(date) {
  const rawWage = hoursWorkedOnDate.call(this, date) * this.payPerHour;
  return parseFloat(rawWage.toString());
}

function allWagesFor() {
  const eligibleDates = this.timeInEvents.map((e) => {
    return e.date;
  });

  const payable = eligibleDates.reduce((memo, d) => {
    return memo + wagesEarnedOnDate.call(this, d).bind(this);
  }, 0);

  return payable;
}

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find((rec) => {
    return rec.firstName === firstName;
  });
}

function calculatePayroll(arrayOfEmployeeRecords) {
  return arrayOfEmployeeRecords.reduce((memo, rec) => {
    return memo + allWagesFor.call(rec);
  }, 0);
}
