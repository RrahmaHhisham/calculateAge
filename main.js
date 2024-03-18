// user choose element
let userDate = document.getElementById("birthDate");

// disable future date selection
userDate.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  // Get user output element
  let userAge = document.getElementById("age");
  //   to delete any text that may be present in the found item
  userAge.innerHTML = "";

  let birthDate = new Date(userDate.value);

  // empty birthday
  if (birthDate == "Invalid Date") {
    let userError = document.getElementById("error");
    // To show error
    userError.innerHTML = "Date is invalid*";
  } else {
    let userError = document.getElementById("error");
    // To remove error (If any)
    userError.innerHTML = "";

    // Separating user's birthdate
    let userDay = birthDate.getDate();
    // month start index 0
    let userMonth = birthDate.getMonth() + 1;
    let userYear = birthDate.getFullYear();

    // Get current date
    let todayDate = new Date();

    // Separating today's date
    let todayDay = todayDate.getDate();
    // month start index 0
    let todayMonth = todayDate.getMonth() + 1;
    let todayYear = todayDate.getFullYear();

    // Calculations to get the age
    let ageDay, ageMonth, ageYear;

    // Get year
    ageYear = todayYear - userYear;

    // Get month
    if (todayMonth >= userMonth) {
      ageMonth = todayMonth - userMonth;
    } else {
        // if todayMonth < userMonth
      ageMonth = 12 + todayMonth - userMonth;
    }

    // Get day
    if (todayDay >= userDay) {
      ageDay = todayDay - userDay;
    } else {
        // if todayDay < userDay
        // The number of days in the month of birth is calculated
      ageDay = getDaysInMonth(userYear, userMonth) + todayDay - userDay;
    }

    // If ageMonth becomes nagative
    if (ageMonth < 0) {
      ageMonth = 11;
    }

    // To show output(User age)
    userAge.innerHTML = `Your age is : ${ageYear} years ${ageMonth} months ${ageDay} days`;
  }
}

// To get number of days in user's birthday month
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
