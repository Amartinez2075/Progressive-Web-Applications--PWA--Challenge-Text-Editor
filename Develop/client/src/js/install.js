const butInstall = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log("event" + event)
    event.preventDefault();
    // Store the triggered event
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }

    // Show the install prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable, as it can only be used once.
    window.deferredPrompt = null;

    // Hide the install button
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    console.log('install hit')
    window.deferredPrompt = null;
});
