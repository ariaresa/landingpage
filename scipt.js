
// const sd = document.querySelector('.sd');
// sd.addEventListener ('click', function() {
// 	const promo = document.querySelector('.progsd');
// 	promo.style.display = 'block';
// });

// const smp = document.querySelector('.smp');
// smp.addEventListener ('click', function() {
// 	const progsmp = document.querySelector('.progsmp');
// 	progsmp.style.display = 'block';
// });

// const sma = document.querySelector('.sma');
// sma.addEventListener ('click', function() {
// 	const progsma = document.querySelector('.progsma');
// 	progsma.style.display = 'block';
// });

let jenjang = document.querySelectorAll('.jenjang');

jenjang.forEach(function(pilih){

	pilih.addEventListener ('click', function() {
	
		// var lihat;
		// for (lihat in pilih) {
		// 	console.log(lihat);
		// };

		const pilihJenjang = pilih.className;
		// pilihJenjang.style.display = 'block';
		console.log(pilihJenjang);
		
		
	// alert('bisa kan');
	


	// const program = pilih.querySelector('#smp');
	// progsmp.style.display = 'block';
	// console.log(program);
	// const progsma = document.querySelector('.progsma');
	// progsma.style.display = 'block';
		
	});
}); 



const close = document.querySelectorAll('.close');

		close.forEach(function(keluar){
			
			keluar.addEventListener('click', function(){
				const program = document.querySelector('.popup');
				program.style.display = 'none';

			});
		}); 


