'use client';

import { useEffect, useRef, useState } from 'react';

import './styles.css';

export default function Flowers() {
	const [lyricsData, setLyricsData] = useState([]);
	const audioRef = useRef(null);
	const lyricsRef = useRef(null);

	useEffect(() => {
		document.body.classList.remove('container');
		setLyricsData([
			{ text: 'At the time', time: 15 },
			{ text: 'The whisper of birds', time: 18 },
			{ text: 'Lonely before the sun cried', time: 27 },
			{ text: 'Fell from the sky', time: 32 },
			{ text: 'Like water drops', time: 33 },
			{ text: "Where I'm now? I don't know why", time: 41 },
			{ text: 'Nice butterflies in my hands', time: 47 },
			{ text: 'Too much light for twilight', time: 54 },
			{ text: 'In the mood for the flowers love', time: 59 },
			{ text: 'That vision', time: 67 },
			{ text: 'Really strong, blew my mind', time: 72 },
			{ text: 'Silence Let me see what it was', time: 78 },
			{ text: 'I only want to live in clouds', time: 83 },
			{ text: "Where I'm now? I don't know why", time: 91 },
			{ text: 'Nice butterflies in my hands', time: 97 },
			{ text: 'Too much light for twilight', time: 104 },
			{ text: 'In the mood for the flowers love', time: 108 },
			{ text: 'At the time', time: 144 },
			{ text: 'The whisper of birds', time: 148 },
			{ text: 'Lonely before the sun cried', time: 153 },
			{ text: 'Fell from the sky', time: 158 },
			{ text: 'Like water drops', time: 164 },
			{ text: "Where I'm now? I don't know why", time: 169 },
			{ text: 'Nice butterflies in my hands', time: 176 },
			{ text: 'Too much light for twilight', time: 183 },
			{ text: 'In the mood for the flowers', time: 188 },
			{ text: 'Love.', time: 140 },
		]);
	}, []);

	useEffect(() => {
		const audio = audioRef.current;
		const lyrics = lyricsRef.current;

		const updateLyrics = () => {
			const time = Math.floor(audio?.currentTime);
			const currentLine = lyricsData.find(
				(line) => time >= line.time && time < line.time + 6,
			);

			if (lyrics) {
				if (currentLine) {
					const fadeInDuration = 0.1;
					const opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

					lyrics.style.opacity = opacity;
					lyrics.innerHTML = currentLine.text;
				} else {
					lyrics.style.opacity = 0;
					lyrics.innerHTML = '';
				}
			}
		};
		const intervalId = setInterval(updateLyrics, 1000);
		return () => clearInterval(intervalId);
	}, [lyricsData]);

	useEffect(() => {
		const ocultarTitulo = () => {
			const titulo = document.querySelector('.titulo');
			titulo.style.animation = 'fadeOut 3s ease-in-out forwards';
			setTimeout(() => {
				titulo.style.display = 'none';
			}, 3000); // Espera 3 segundos antes de ocultar completamente
		};

		const timerId = setTimeout(ocultarTitulo, 216000);
		return () => clearTimeout(timerId);
	}, []);

	return (
		<body className='container'>
			<audio src='/sound.mp3' autoPlay></audio>
			<div id='lyrics' ref={lyricsRef}></div>
			<h1 className='titulo text-yellow-300'>
				Estas flores amarillas son un reflejo de la alegría que traes a mi vida.
				<br />
				<br />
				Gracias por iluminar mis días con tu presencia.
			</h1>

			<div className='night'></div>
			<div className='flowers'>
				<div className='flower flower--1'>
					<div className='flower__leafs flower__leafs--1'>
						<div className='flower__leaf flower__leaf--1'></div>
						<div className='flower__leaf flower__leaf--2'></div>
						<div className='flower__leaf flower__leaf--3'></div>
						<div className='flower__leaf flower__leaf--4'></div>
						<div className='flower__white-circle'></div>

						<div className='flower__light flower__light--1'></div>
						<div className='flower__light flower__light--2'></div>
						<div className='flower__light flower__light--3'></div>
						<div className='flower__light flower__light--4'></div>
						<div className='flower__light flower__light--5'></div>
						<div className='flower__light flower__light--6'></div>
						<div className='flower__light flower__light--7'></div>
						<div className='flower__light flower__light--8'></div>
					</div>
					<div className='flower__line'>
						<div className='flower__line__leaf flower__line__leaf--1'></div>
						<div className='flower__line__leaf flower__line__leaf--2'></div>
						<div className='flower__line__leaf flower__line__leaf--3'></div>
						<div className='flower__line__leaf flower__line__leaf--4'></div>
						<div className='flower__line__leaf flower__line__leaf--5'></div>
						<div className='flower__line__leaf flower__line__leaf--6'></div>
					</div>
				</div>

				<div className='flower flower--2'>
					<div className='flower__leafs flower__leafs--2'>
						<div className='flower__leaf flower__leaf--1'></div>
						<div className='flower__leaf flower__leaf--2'></div>
						<div className='flower__leaf flower__leaf--3'></div>
						<div className='flower__leaf flower__leaf--4'></div>
						<div className='flower__white-circle'></div>

						<div className='flower__light flower__light--1'></div>
						<div className='flower__light flower__light--2'></div>
						<div className='flower__light flower__light--3'></div>
						<div className='flower__light flower__light--4'></div>
						<div className='flower__light flower__light--5'></div>
						<div className='flower__light flower__light--6'></div>
						<div className='flower__light flower__light--7'></div>
						<div className='flower__light flower__light--8'></div>
					</div>
					<div className='flower__line'>
						<div className='flower__line__leaf flower__line__leaf--1'></div>
						<div className='flower__line__leaf flower__line__leaf--2'></div>
						<div className='flower__line__leaf flower__line__leaf--3'></div>
						<div className='flower__line__leaf flower__line__leaf--4'></div>
					</div>
				</div>

				<div className='flower flower--3'>
					<div className='flower__leafs flower__leafs--3'>
						<div className='flower__leaf flower__leaf--1'></div>
						<div className='flower__leaf flower__leaf--2'></div>
						<div className='flower__leaf flower__leaf--3'></div>
						<div className='flower__leaf flower__leaf--4'></div>
						<div className='flower__white-circle'></div>

						<div className='flower__light flower__light--1'></div>
						<div className='flower__light flower__light--2'></div>
						<div className='flower__light flower__light--3'></div>
						<div className='flower__light flower__light--4'></div>
						<div className='flower__light flower__light--5'></div>
						<div className='flower__light flower__light--6'></div>
						<div className='flower__light flower__light--7'></div>
						<div className='flower__light flower__light--8'></div>
					</div>
					<div className='flower__line'>
						<div className='flower__line__leaf flower__line__leaf--1'></div>
						<div className='flower__line__leaf flower__line__leaf--2'></div>
						<div className='flower__line__leaf flower__line__leaf--3'></div>
						<div className='flower__line__leaf flower__line__leaf--4'></div>
					</div>
				</div>

				<div className='grow-ans' style={{ '--d': '1.2s' }}>
					<div className='flower__g-long'>
						<div className='flower__g-long__top'></div>
						<div className='flower__g-long__bottom'></div>
					</div>
				</div>

				<div className='growing-grass '>
					<div className='flower__grass flower__grass--1'>
						<div className='flower__grass--top'></div>
						<div className='flower__grass--bottom'></div>
						<div className='flower__grass__leaf flower__grass__leaf--1'></div>
						<div className='flower__grass__leaf flower__grass__leaf--2'></div>
						<div className='flower__grass__leaf flower__grass__leaf--3'></div>
						<div className='flower__grass__leaf flower__grass__leaf--4'></div>
						<div className='flower__grass__leaf flower__grass__leaf--5'></div>
						<div className='flower__grass__leaf flower__grass__leaf--6'></div>
						<div className='flower__grass__leaf flower__grass__leaf--7'></div>
						<div className='flower__grass__leaf flower__grass__leaf--8'></div>
						<div className='flower__grass__overlay'></div>
					</div>
				</div>

				<div className='growing-grass'>
					<div className='flower__grass flower__grass--2'>
						<div className='flower__grass--top'></div>
						<div className='flower__grass--bottom'></div>
						<div className='flower__grass__leaf flower__grass__leaf--1'></div>
						<div className='flower__grass__leaf flower__grass__leaf--2'></div>
						<div className='flower__grass__leaf flower__grass__leaf--3'></div>
						<div className='flower__grass__leaf flower__grass__leaf--4'></div>
						<div className='flower__grass__leaf flower__grass__leaf--5'></div>
						<div className='flower__grass__leaf flower__grass__leaf--6'></div>
						<div className='flower__grass__leaf flower__grass__leaf--7'></div>
						<div className='flower__grass__leaf flower__grass__leaf--8'></div>
						<div className='flower__grass__overlay'></div>
					</div>
				</div>

				<div className='grow-ans' style={{ '--d': '2.4s' }}>
					<div className='flower__g-right flower__g-right--1'>
						<div className='leaf'></div>
					</div>
				</div>

				<div className='grow-ans' style={{ '--d': '2.8s' }}>
					<div className='flower__g-right flower__g-right--2 '>
						<div className='leaf'></div>
					</div>
				</div>

				<div className='grow-ans' style={{ '--d': '2.8s' }}>
					<div className='flower__g-front'>
						<div className='flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1'>
							<div className='flower__g-front__leaf'></div>
						</div>
						<div className='flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2'>
							<div className='flower__g-front__leaf'></div>
						</div>
						<div className='flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3'>
							<div className='flower__g-front__leaf'></div>
						</div>
						<div className='flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4'>
							<div className='flower__g-front__leaf'></div>
						</div>
						<div className='flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5'>
							<div className='flower__g-front__leaf'></div>
						</div>
						<div className='flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6'>
							<div className='flower__g-front__leaf'></div>
						</div>
						<div className='flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7'>
							<div className='flower__g-front__leaf'></div>
						</div>
						<div className='flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8'>
							<div className='flower__g-front__leaf'></div>
						</div>
						<div className='flower__g-front__line'></div>
					</div>
				</div>

				<div className='grow-ans' style={{ '--d': '3.2s' }}>
					<div className='flower__g-fr '>
						<div className='leaf'></div>
						<div className='flower__g-fr__leaf flower__g-fr__leaf--1'></div>
						<div className='flower__g-fr__leaf flower__g-fr__leaf--2'></div>
						<div className='flower__g-fr__leaf flower__g-fr__leaf--3'></div>
						<div className='flower__g-fr__leaf flower__g-fr__leaf--4'></div>
						<div className='flower__g-fr__leaf flower__g-fr__leaf--5'></div>
						<div className='flower__g-fr__leaf flower__g-fr__leaf--6'></div>
						<div className='flower__g-fr__leaf flower__g-fr__leaf--7'></div>
						<div className='flower__g-fr__leaf flower__g-fr__leaf--8'></div>
					</div>
				</div>

				<div className='long-g long-g--0'>
					<div className='grow-ans' style={{ '--d': '3s' }}>
						<div className='leaf leaf--0'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '2.2s' }}>
						<div className='leaf leaf--1'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '3.4s' }}>
						<div className='leaf leaf--2'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '3.6s' }}>
						<div className='leaf leaf--3'></div>
					</div>
				</div>

				<div className='long-g long-g--1'>
					<div className='grow-ans' style={{ '--d': '3.6s' }}>
						<div className='leaf leaf--0'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '3.8s' }}>
						<div className='leaf leaf--1'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '4s' }}>
						<div className='leaf leaf--2'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '4.2s' }}>
						<div className='leaf leaf--3'></div>
					</div>
				</div>

				<div className='long-g long-g--2'>
					<div className='grow-ans' style={{ '--d': '4s' }}>
						<div className='leaf leaf--0'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '4.2s' }}>
						<div className='leaf leaf--1'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '4.4s' }}>
						<div className='leaf leaf--2'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '4.6s' }}>
						<div className='leaf leaf--3'></div>
					</div>
				</div>

				<div className='long-g long-g--3'>
					<div className='grow-ans' style={{ '--d': '4s' }}>
						<div className='leaf leaf--0'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '4.2s' }}>
						<div className='leaf leaf--1'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '3s' }}>
						<div className='leaf leaf--2'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '3.6s' }}>
						<div className='leaf leaf--3'></div>
					</div>
				</div>

				<div className='long-g long-g--4'>
					<div className='grow-ans' style={{ '--d': '4s' }}>
						<div className='leaf leaf--0'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '4.2s' }}>
						<div className='leaf leaf--1'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '3s' }}>
						<div className='leaf leaf--2'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '3.6s' }}>
						<div className='leaf leaf--3'></div>
					</div>
				</div>

				<div className='long-g long-g--5'>
					<div className='grow-ans' style={{ '--d': '4s' }}>
						<div className='leaf leaf--0'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '4.2s' }}>
						<div className='leaf leaf--1'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '3s' }}>
						<div className='leaf leaf--2'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '3.6s' }}>
						<div className='leaf leaf--3'></div>
					</div>
				</div>

				<div className='long-g long-g--6'>
					<div className='grow-ans' style={{ '--d': '4.2s' }}>
						<div className='leaf leaf--0'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '4.4s' }}>
						<div className='leaf leaf--1'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '4.6s' }}>
						<div className='leaf leaf--2'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '4.8s' }}>
						<div className='leaf leaf--3'></div>
					</div>
				</div>

				<div className='long-g long-g--7'>
					<div className='grow-ans' style={{ '--d': '3s' }}>
						<div className='leaf leaf--0'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '3.2s' }}>
						<div className='leaf leaf--1'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '3.5s' }}>
						<div className='leaf leaf--2'></div>
					</div>
					<div className='grow-ans' style={{ '--d': '3.6s' }}>
						<div className='leaf leaf--3'></div>
					</div>
				</div>
			</div>
		</body>
	);
}
