// BUDGET CONTROLLER
var budgetController = (function () {
    // Some code
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

})();



// UI CONTROLLER
var UIController = (function () {

    // Smart way to save all the HTML names in one list
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getinput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either income or expense
                decription: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        // Mwethod to get the DOMstrings
        getDOMstrings: function () {
            return DOMstrings;
        }
    };
})();



// APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
    var setupEventlisteners = function () {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrAddItem);

        document.addEventListener("keypress", function (event) {
            if (event.keyCode === 13 || event.which === 13){
                ctrAddItem();
            }
        });
    }



    var ctrAddItem = function () {

         // 1. Get filled input data
         var input = UICtrl.getinput();
         console.log(input);


        // 2. Add the item to rhe budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
     }

    return{
        init: function () {
            // This function is the only function that will be called to set up the application
            setupEventlisteners()
        }
    }


})(budgetController, UIController);



// Set up the application
controller.init()