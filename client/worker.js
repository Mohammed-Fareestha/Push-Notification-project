console.log('service Worker Loaded...')

self.addEventListener('push', e => {
    const data = e.data.join();
    console.log('push Recieved...')
    self.registration.showNotification(data.title, {
        body: 'Notification by Traversy Media',
        icon: 'http://image.ibb.co/frYOFd/tmlogo.png'
    })
})