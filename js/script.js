const arrow = document.querySelector('.toggleMenu');
arrow.addEventListener('click', function() {

	const arrowRight = document.querySelector('.arrow-right');
	arrowRight.classList.toggle('show-arrow');

	const arrowLeft = document.querySelector('.arrow-left');
	arrowLeft.classList.toggle('show-arrow');

	const navbar = document.querySelector('nav');
	navbar.classList.toggle('close');

	event.preventDefault();
});

const kataMutiara = [
	'Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini.<br>-Benjamin Franklin',
	'Kadang-kadang, pilihan terbaik adalah menerima.<br>- Dewi Lestari',
	'Jatuh cinta pada dirimu adalah rahasia pertama menuju kebahagiaan.<br>- Robert Morle',
	'Apabila sesuatu yang kau senangi tidak terjadi maka senangilah apa yang terjadi.<br>- Ali bin Abi Thalib',
	'Janganlah engkau berduka atas apa yang telah terjadi, karena tidak ada apapun di dunia ini yang abadi.<br>- Imam Syafi’i',
	'Sebab hidup terlalu singkat untuk membiarkan orang lain menentukan apa yang membuat kita bahagia.<br>- Ernest Prakasa',
	'Sebelum menjadi kupu kupu yang indah, betapa banyak waktu yang harus dilaluinya dalam kepompong.<br>- Aiman Bagea',
	'Pikiran kita ibarat parasut, hanya berfungsi ketika terbuka.<br>- Walt Disney',
	'Siapa yang menjauhkan diri dari sifat suka mengeluh maka berarti ia mengundang kebahagiaan.<br>- Abu Bakar Ash Shidiq',
	'Hidup itu memang terkadang rumit, namun serumit apa pun kehidupan ini tetap harus kita jalani, karna Tuhan punya rencana di balik semua ini.<br>- Jefri Al Buchori'
];

const imgMotivasi = [
	'imgM1.jpg',
	'imgM2.jpg',
	'imgM3.jpg',
	'imgM4.jpg',
	'imgM5.jpg',
	'imgM6.jpg',
]

const getMessage = function() {
	const luckyNumber = Math.floor(Math.random()*10);

	if (luckyNumber >= 5) {
		return 0;
	} else {
		return 1;
	}
}

const gift = document.getElementById('message');
gift.addEventListener('click', function() {
	// alert('clicked!');
	const message = getMessage();
	if (message == 0) {
		Swal.fire({
			width: 300,
			color: '#333333',
			showCloseButton: true,
			showConfirmButton: false,
			position: 'center-end',
		  	html: '<p align="left">' + kataMutiara[Math.floor(Math.random() * kataMutiara.length)] + '</p>',
		  	showClass: {
		    	popup: 'animate__animated animate__fadeInRight'
		  	},
		  	hideClass: {
		    	popup: 'animate__animated animate__fadeOutRight'
		  	}
		})
	} else {
		// alert(`url(/img/${imgMotivasi[0]})`);
		Swal.fire({
			width: 300,
			showCloseButton: true,
			showConfirmButton: false,
			position: 'center-end',
		  	imageUrl: `img/${imgMotivasi[Math.floor(Math.random() * imgMotivasi.length)]}`,
		  	imageWidth: 200,
		  	imageHeight: 200,
		  	imageAlt: 'Some cool image',
		  	showClass: {
		    	popup: 'animate__animated animate__fadeInRight'
		  	},
		  	hideClass: {
		    	popup: 'animate__animated animate__fadeOutRight'
		  	}
		})
	}
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbx7IwPLVA_UjW4Bl4Kdyjoltuloq1UvuAJaJu9YkbTaz3p3Rh7DRXOMf64enwpzMXym/exec';
const form = document.forms['submit-to-google-sheet'];
const btnKirim = document.querySelector('.kirim');
const btnLoading = document.querySelector('.sending');

form.addEventListener('submit', e => {
    e.preventDefault();

    btnLoading.classList.toggle('hide');
    btnKirim.classList.toggle('hide');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      	btnLoading.classList.toggle('hide');
	    btnKirim.classList.toggle('hide');
      	console.log('Success!', response);
      	Swal.fire({
			width: 300,
			color: '#333333',
			showCloseButton: true,
			showConfirmButton: false,
			position: 'top-end',
			title: 'Terima Kasih',
		  	text: 'Pesan anda sudah diterima',
		  	timer: 2000,
		  	showClass: {
		    	popup: 'animate__animated animate__fadeInRight'
		  	},
		  	hideClass: {
		    	popup: 'animate__animated animate__fadeOutRight'
		  	}
		})
      	form.reset();
      })
      .catch(error => console.error('Error!', error.message))
})