const cursorblob = document.getElementById('cursorblob');
const blobcontainer = document.getElementById('blobcontainer');

let updateBlobPosition = (e) => {
	const left = e.clientX + window.scrollX;
	const top = e.clientY + window.scrollY;
  
	cursorblob.animate({
		left: `${left}px`,
		top: `${top}px`
	}, {
		duration: 2000, fill: "forwards"
	});
}

document.addEventListener('mousemove', updateBlobPosition);
document.addEventListener('touchmove', updateBlobPosition);