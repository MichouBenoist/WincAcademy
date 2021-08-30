function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
}

for (let score = 60; score <= 100; score++) {

    var grade = assignGrade(score);

    if (grade == "A" || grade == "E") {
        console.log(`For scoring ${score} points, you get an ${grade}.`);
    }
    else {
        console.log(`For scoring ${score} points, you get a ${grade}.`);
    }
}
