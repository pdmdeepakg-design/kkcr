let students = {};

document.getElementById('add-student-btn').addEventListener('click', (e) => {
e.preventDefault();
const rollNo = document.getElementById('roll-no').value;
const name = document.getElementById('name').value;
students[rollNo] = { name, marks: {} };
document.getElementById('add-student-form').reset();
});

document.getElementById('add-marks-btn').addEventListener('click', (e) => {
e.preventDefault();
const rollNo = document.getElementById('roll-no-marks').value;
const subject = document.getElementById('subject').value;
const marks = parseInt(document.getElementById('marks').value);
if (students[rollNo]) {
students[rollNo].marks[subject] = marks;
} else {
alert('Student not found!');
}
document.getElementById('add-marks-form').reset();
});

document.getElementById('calculate-result-btn').addEventListener('click', () => {
const resultDiv = document.getElementById('result');
resultDiv.innerHTML = '';
for (const rollNo in students) {
const student = students[rollNo];
const totalMarks = Object.values(student.marks).reduce((a, b) => a + b, 0);
const percentage = (totalMarks / Object.keys(student.marks).length).toFixed(2);
resultDiv.innerHTML += `
<h2>Result for ${student.name} (${rollNo})</h2>
<p>Total Marks: ${totalMarks}</p>
<p>Percentage: ${percentage}%</p>
<table>
<tr>
<th>Subject</th>
<th>Marks</th>
</tr>
${Object.keys(student.marks).map(subject => `
<tr>
<td>${subject}</td>
<td>${student.marks[subject]}</td>
</tr>
`).join('')}
</table>
<br><br>
`;
}
});