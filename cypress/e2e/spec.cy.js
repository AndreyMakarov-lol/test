
describe('test', function() {
  it ('passes', function() {
    

    //заходим на сайт
    cy.visit('https://forma-obratnoy-svyazi-dlya-sayta-622314.testograf.ru')
    
    //Проверяем обязательные поля ввода(ваше имя, e-mail, телефон) на наличие пометки о обязательном заполнении
    function checkCircleInElements(index, inputValue) {
      cy.get('.question___df23e051d300eb092d0d').eq(index)  //Находим div включающий нужные элементы используя класс и индекс
        .then(($element) => {  // Используем then для работы с выбранным блоком
            const $circle = $element.find('circle[cx="11.865"]');  // Ищем круг внутри элемента
            if ($circle.length) { // Проверяем, есть ли круг 
                cy.wrap($element).find('input').eq(0).type(inputValue);  // Находим поле ввода и вводим значение
            } else {
                cy.log('Круг не найден в элементе с индексом');  // Логируем, если круг не найден
            }
        });
    }

    //Проверяем обязательное поле выпадающий список на наличие пометки о обязательном заполнении
    function checkCircleInElementsList(index) {
      cy.get('.question___df23e051d300eb092d0d').eq(index)   //Находим div включающий нужные элементы используя класс и индекс
        .then(($element) => {  // Используем then для работы с выбранным блоком
            const $circle = $element.find('circle[cx="11.865"]');  // Ищем круг внутри элемента
            if ($circle.length) {  // Проверяем, есть ли круг
                cy.wrap($element).find('input').click();//Кликаем по выпадающему списку
                cy.contains('Жалоба').click()  // Ввыбираем значение
            } else {
                cy.log('Круг не найден в элементе с индексом');  // Логируем, если круг не найден
            }
        });
    }

    //Проверяем обязательное поле ввода Ваше сообщение на наличие пометки о обязательном заполнении
    function checkCircleInElements2(index) {
      cy.get('.question___df23e051d300eb092d0d').eq(index)   //Находим div включающий нужные элементы используя класс и индекс
        .then(($element) => {  // Используем then для работы с выбранным элементом
            const $circle = $element.find('circle[cx="11.865"]');  // Ищем круг внутри элемента
            if ($circle.length) {  // Проверяем, есть ли круг
                cy.wrap($element).get('textarea').type("Привет! Это сообщение.")  // Вводим сообщение
            } else {
                cy.log('Круг не найден в элементе с индексом');  // Логируем, если круг не найден
            }
        });
    }
    // Поочередно вызываем необходимые функции
    checkCircleInElements(0, 'Иван'); 
    checkCircleInElements(1, 'ivan@example.com');
    checkCircleInElements(2, '88005553535');
    checkCircleInElementsList(3);
    checkCircleInElements2(4);
    cy.contains('Отправить').click() // Нажимаем на кнопку отправить 
    cy.contains('Благодарим за обращение!').should('be.visible') //Проверяем появление сообщения об отправке обращения
  });
})