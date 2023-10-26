function validateForm(){
    const arabName = document.myForm.arabname.value;
    const arabicFeedback = document.querySelector(".feedback1");
    const englishName = document.myForm.engname.value;
    const englishFeedback = document.querySelector(".feedback2");
    const selectVal = document.myForm.selectField.value;
    const academicYear = document.myForm.academicYear.value;
    const selectFeedback = document.querySelector(".feedback3");
    const academicFeedback = document.querySelector(".feedback4");

    // Arabic Name Validation
    
    let isArabic = /^[ء-ي ]+$/;
    if (!isArabic.test(arabName)){
        arabicFeedback.classList.add("show")
        setTimeout(function(){
            arabicFeedback.classList.remove("show")
        }, 3000)
    }
    
    // English Name Validation
    let isEnglish = /^[A-Za-z]+$/;
    if (isArabic.test(englishName)){
        englishFeedback.classList.add("show")
        setTimeout(function(){
            englishFeedback.classList.remove("show")
        }, 3000)
    }
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