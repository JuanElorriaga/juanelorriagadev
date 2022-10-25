const form = document.querySelector('.contact_form');

function senMsg(e){
e.preventDefault();
	
const name = document.querySelector('.name');
email= document.querySelector('.email');
msg  = document.querySelector('.msg');




//função para envio do email

email.send({
	
	to: 'juangithubdev@yahoo.com',
	from: email.value,
	Subject: "Contact Form",
	Body: msg.value	
}).then(
	message=> alert(message)
);
	
}

form.addEventListener('submit', sendMsg);
