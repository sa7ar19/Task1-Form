function validateForm(){
    let selectVal = document.myForm.selectField.value;
    let academicYear = document.myForm.academicYear.value;
    const academicFeedback = document.querySelector(".feedback2");
    const selectFeedback = document.querySelector(".feedback1");


    // select value validation
    if(selectVal === 'Question'){
        selectFeedback.classList.add("show")
        setTimeout(function(){
            selectFeedback.classList.remove("show")
        }, 3000)
    };

    // Academic Year validation
    if(academicYear <= '0' || academicYear > 7){
        academicFeedback.classList.add("show")
        setTimeout(function(){
            academicFeedback.classList.remove("show")
        }, 3000)}

}