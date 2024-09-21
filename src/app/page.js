import ParticlesBack from '@/components/background';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<body className='w-full mx-auto'>
			<ParticlesBack />
			<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] z-40 '>
				<main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
					<div className='greetings'>
						<span>B</span>
						<span>u</span>
						<span>e</span>
						<span>n</span>
						<span>o</span>
						<span>s</span>
						<span> </span>
						<span>D</span>
						<span>i</span>
						<span>a</span>
						<span>s</span>
						<span>!</span>
					</div>
					<div className='description'>
						<span></span>
					</div>
					<div className='button w-full flex justify-center'>
						<Link
							href='/flowers'
							style={{ color: '#fff' }}
							className='bg-[#0a2be9] rounded-full px-7 py-3 font-bold text-lg hover:bg-[#0a2be9]/[0.8] transition-colors duration-150 ease-in-out active:shadow-inner active:shadow-gray-500'
						>
							CLICK AQUÍ
						</Link>
					</div>
				</main>
				<footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
					<p className='text-center text-lg text-gray-400'>
						Hecho con ❤️ por Humberto, tu esposo super maravilloso. <span>💖</span>
					</p>
				</footer>
			</div>
		</body>
	);
}
