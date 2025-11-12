const gpaForm = document.getElementById('gpaForm');
const result = document.getElementById('result');
const gpaValue = document.getElementById('gpaValue');
const gradeEl = document.getElementById('grade');

gpaForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const marks = Array.from(document.querySelectorAll('.marks')).map(input => Number(input.value));
  
  const gpa = calculateGPA(marks);
  gpaValue.textContent = gpa.toFixed(2);
  gradeEl.textContent = getGrade(gpa);

  result.classList.remove('hidden');
});

function calculateGPA(marks) {
  // Assuming 100 marks scale, GPA out of 4.0
  const totalMarks = marks.reduce((a,b)=>a+b,0);
  const avg = totalMarks / marks.length;

  if(avg >= 80) return 4.0;
  if(avg >= 70) return 3.5;
  if(avg >= 60) return 3.0;
  if(avg >= 50) return 2.5;
  if(avg >= 40) return 2.0;
  return 0.0;
}

function getGrade(gpa) {
  if(gpa === 4.0) return "Grade: A+";
  if(gpa >= 3.5) return "Grade: A";
  if(gpa >= 3.0) return "Grade: B";
  if(gpa >= 2.5) return "Grade: C";
  if(gpa >= 2.0) return "Grade: D";
  return "Grade: F";
}
