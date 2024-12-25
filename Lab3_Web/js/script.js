// Клієнтська валідація форми та інші скрипти
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            const name = form.querySelector("#name");
            const email = form.querySelector("#email");
            const message = form.querySelector("#message");

            // Додаткова проста перевірка
            if (!name.value.trim()) {
                alert("Будь ласка, введіть своє ім’я.");
                e.preventDefault();
                return;
            }

            if (!email.value.trim()) {
                alert("Будь ласка, введіть вашу електронну пошту.");
                e.preventDefault();
                return;
            }

            if (!message.value.trim()) {
                alert("Будь ласка, введіть повідомлення.");
                e.preventDefault();
                return;
            }

            // Якщо все добре
            alert("Дякуємо! Ваше повідомлення надіслане успішно.");
        });
    }
});
