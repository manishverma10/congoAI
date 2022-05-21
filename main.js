let activatBot=()=>{
    
var botui = new BotUI('my-botui-app');

// Start Bot
// First Messages
botui.message.bot({
    content: 'Can i redeem my FB the before original term!',
    loading: false,
    delay: 3000,
}).then(function () {
    return botui.message.bot({
        loading: false,
        delay: 1500,
        content: "How do i pay my Credit card bill?",
    });
}).then(function () {
    return botui.message.bot({
        loading: false,
        delay: 1500,
        content: "How can i get my account statement?",
    });
}).then(function () {
    return botui.message.bot({
        loading: false,
        delay: 1500,
        content: "what is the tenure of Fixed deposite",
    });
}).then(function () {
  return botui.action.button({
        delay: 1500,
        loading: false,
        addMessage: false,
        action: [{
            text: 'Start a new conversation',
            value: 'yes'
        }, 
        // {
        //     text: 'No.',
        //     value: 'no'
        // }
    ]
    })
}).then(function (res) {
  if (res.value == 'yes') {
     return botui.message.bot({
                loading: false,
                delay: 1500,
                content: "I quite agree!",
            });
  } else {
    return botui.message.bot({
                loading: false,
                delay: 1500,
                content: "Okay, I'm sorry ...",
            });
  }
}).then(function () {
  return botui.message.bot({
                loading: false,
                delay: 1500,
                content: "Bye, I need to go know.",
            });
})

}

function popClick() {
    const popup = document.querySelector('.popup');
    const popupIcon = document.querySelector('.btn-raised');
      if(popup.style.display == 'none'){
        activatBot()
        popup.style.display = 'block';
        popupIcon.style.display = 'none';
      }else{
        popup.style.display = 'none'
      };
    }