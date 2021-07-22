function getReport() {

  var grade = "";
  var result = "";


  var engMarks = document.getElementById('txtEnglish').value;
  var historyMarks = document.getElementById('txtHistory').value;
  var mathsMarks = document.getElementById('txtMaths').value;
  var scienceMarks = document.getElementById('txtScience').value;


  var totalMarks = engMarks - (-historyMarks) - (-mathsMarks) - (-scienceMarks);


  var averageMarks = totalMarks / 4;

  switch (


    (averageMarks > 60 && averageMarks <= 100) ? 1 :
    (averageMarks > 50 && averageMarks < 60) ? 2 :
    (averageMarks > 40 && averageMarks < 50) ? 3 : 0
  )

  {
    case 1:
      grade = "A";
      result = "First Class";
      break;
    case 2:
      grade = "B";
      result = "Second Class";
      break;
    case 3:
      grade = "C";
      result = "Third Class";
      break;
    case 0:
      grade = "D";
      result = "Fail";
      break;
  }


  document.getElementById('txtStudentName').value = document.getElementById('txtName').value;
  document.getElementById('txtStudentClass').value = document.getElementById('txtClass').value;
  document.getElementById('txtTotalMarks').value = totalMarks;
  document.getElementById('txtAvgMarks').value = averageMarks;
  document.getElementById('txtGrade').value = grade;
  document.getElementById('txtResult').value = result;

} 
