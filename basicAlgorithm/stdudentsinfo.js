const students = [
    {
        name: 'john',
        studentId: 2020123456,
        major: 'business'
    },
    {
        name: 'elice',
        studentId: 2015111111,
        major: 'statistics'
    },
    {
        name: 'jennifer',
        studentId: 2017000000,
        major: 'visual design'
    }
  ]
  
  /*1. elice를 찾아 전공을 'computer science'로 바꿔주세요.*/
  for(var i = 0;  i < students.length; i++) {
    if(students[i].name == 'elice') {
      students[i].major = 'computer science';
    }
  }
  
  /*2. 웹 화면에 students 정보를 출력해 제대로 수정되었는지 확인해보세요.*/
  for(var i = 0;  i < students.length; i++) {
    document.write(students[i].name + "'s major: " + students[i].major + "<br>")
  }