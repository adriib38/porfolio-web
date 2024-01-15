let $mail = document.getElementById("mail");
let mail = $mail.getAttribute("text");
let $spanEmail = document.createElement("a");
let isEmailVisible = false;

$mail.addEventListener("click", function (event) {
  event.stopPropagation();
  if (!isEmailVisible) {
    $spanEmail.style.backgroundColor = "#616161";
    $spanEmail.style.color = "white";
    $spanEmail.style.padding = "4px 8px";
    $spanEmail.style.borderRadius = "3px";
    $spanEmail.style.fontSize = "15px";
    $spanEmail.style.position = "absolute";

    $spanEmail.textContent = mail;
    $spanEmail.href = `mailto:${mail}`;

    let rect = $mail.getBoundingClientRect();
    let mailTop = rect.top + rect.height + 5;

    $spanEmail.style.top = mailTop + "px";
    $spanEmail.style.left = rect.left + "px";

    document.body.appendChild($spanEmail);
    isEmailVisible = true;
  }
});

document.body.addEventListener("click", function (event) {
  if (isEmailVisible && event.target !== $spanEmail) {
    document.body.removeChild($spanEmail);
    isEmailVisible = false;
  }
});
