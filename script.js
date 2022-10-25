function sendEmail() {
	Email.send({
	Host: "smtp.mail.yahoo.com",
	Username : "<juandevgithub@yahoo.com>",
	Password : "<Senhapadrao2022>",
	To : '<juandevgithub@yahoo.com>',
	From : "<sender’s email address>",
	Subject : "<Email de Contato>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
