const callbackPrompt = {
    message: 'Some message',
    showPrompt: function() {
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber)
    },
    showDeferredPrompt(ms) {
        setTimeout(this.showPrompt.bind(this), ms);
    }
}

export { callbackPrompt }