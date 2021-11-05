export function popup () {

    const openFeedModalBtns = document.querySelectorAll('.chat-btn');
    const openCallModalBtns = document.querySelectorAll('.phone-btn');
    const closeModalBtns = document.querySelectorAll('.modal-btn__close');
    const toggleFeedModal = document.querySelector('.feedback-mod');
    const toggleCallModal = document.querySelector('.call-mod');
    const toggleSidebar = document.querySelector('.sidebar');
    const toggleBlur = document.querySelector('.main-inform__blur');

    for (let openFeedModalBtn of openFeedModalBtns) {
        openFeedModalBtn.addEventListener('click', function () {
            toggleFeedModal.classList.add('modal-window--active');
            toggleSidebar.classList.remove('sidebar--active');
            toggleBlur.classList.add('main-inform__blur--active-blur');
        });
    };

    for (let openCallModalBtn of openCallModalBtns) {
        openCallModalBtn.addEventListener('click', function () {
            toggleCallModal.classList.add('modal-window--active');
            toggleSidebar.classList.remove('sidebar--active');
            toggleBlur.classList.add('main-inform__blur--active-blur');
        });
    };
    
    for (let closeModalBtn of closeModalBtns )
    closeModalBtn.addEventListener('click', function () {
        toggleFeedModal.classList.remove('modal-window--active');
        toggleCallModal.classList.remove('modal-window--active');
        toggleBlur.classList.toggle('main-inform__blur--active-blur');
    });

    toggleBlur.addEventListener('click', function () {
        toggleFeedModal.classList.remove('modal-window--active');
        toggleCallModal.classList.remove('modal-window--active');
        toggleBlur.classList.remove('main-inform__blur--active-blur');
    })
};