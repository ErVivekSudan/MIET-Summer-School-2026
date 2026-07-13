// Task 1: Welcome Function
function welcomeStudent(name, course) {
    return `Welcome ${name} to the ${course} course`;
}
console.log(welcomeStudent("Asha", "JavaScript"));

// Task 2: Add Two Numbers
function addNumbers(a, b) {
    return a + b;
}
const result = addNumbers(10, 20);
console.log(result);

// Task 3: Voting Eligibility
function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Eligible to vote";
    } else {
        return "Not eligible to vote";
    }
}
console.log(checkVotingEligibility(20));
console.log(checkVotingEligibility(15));

// Task 4: Even or Odd
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOrOdd(12));
console.log(checkEvenOrOdd(7));

// Task 5: Positive, Negative or Zero
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));

// Task 6: Find the Larger Number
function findLargest(a, b) {
    if (a === b) {
        return "Both numbers are equal";
    } else if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(findLargest(10, 20));
console.log(findLargest(50, 50));

// Task 7: Student Grade
function getGrade(marks) {
    if (marks >= 90) {
        return "A+";
    } else if (marks >= 75) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log(getGrade(95));
console.log(getGrade(80));
console.log(getGrade(65));
console.log(getGrade(45));
console.log(getGrade(30));

// Task 8: Placement Eligibility
function checkPlacementEligibility(percentage, hasBacklogs) {
    if (percentage >= 65 && hasBacklogs === false) {
        return "Eligible for placement";
    } else {
        return "Not eligible for placement";
    }
}
console.log(checkPlacementEligibility(72, false));
console.log(checkPlacementEligibility(80, true));

// Task 9: Login Validation
function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Login successful";
    } else {
        return "Invalid credentials";
    }
}
console.log(login("admin", "1234"));
console.log(login("admin", "5678"));
console.log(login("student", "1234"));

// Task 10: == vs ===
console.log(5 == "5");   // true because == converts the string to a number before comparing
console.log(5 === "5");  // false because === checks both value and type, number is not equal to string
console.log(false == 0);  // true because == converts false to 0 before comparing
console.log(false === 0); // false because === checks both value and type, boolean is not equal to number
console.log(10 === 10);   // true because both value and type are the same

// Main Challenge: Student Result Function
function getStudentResult(name, marks, attendance) {
    if (marks >= 40 && attendance >= 75) {
        return `${name} passed the course`;
    } else {
        return `${name} did not pass the course`;
    }
}
console.log(getStudentResult("Asha", 82, 90));
console.log(getStudentResult("Ravi", 65, 60));
