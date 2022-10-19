
document.getElementById('genResult').addEventListener('click', () =>
{

    // Обработка кнопки genResult. По нажатию обновляем данные. 
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
});

document.getElementById('resetResult').addEventListener('click', () => {

     // Обработка кнопки resetResult. Очистка результата. 
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('middleNameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthDateOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
})