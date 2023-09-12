import Image from 'next/image'

export default function Home() {
  return (

    
    <main className="flex min-h-screen flex-col">
      <nav className="bg-white border-gray-200  ">
        <div className="container mx-auto">
          <div className='flex justify-center items-center'>
            <Image
              src="/logo.png"
              alt="Home"
              width={200}
              height={200}
              priority
              />
          </div>
        </div>
      </nav>

      
  <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider  min-h-fit" >



  <div className="max-w-7xl flex items-center h-fit flex-wrap mx-auto my-32 lg:my-0">
    

	<div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
	

		<div className="p-4 md:p-12 text-center lg:text-left">
		
		
      <Image
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48  bg-center"
              src="/marie.jpg" 
              alt="Home"
              width={1000}
              height={1000}
              priority
              />
  
			
  <h1 className="text-3xl font-bold pt-8 lg:pt-0">Bienvenue sur <span className='text-mlc'>mlcoachandcleen.com !🌟</span></h1>

			<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
			<p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
          <svg className="h-4 fill-current text-green-700 pr-4 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg> 
              Site en construction</p>
			<section>
      <p>Actuellement en pleine construction, ce site promet de bientôt vous dévoiler une expérience riche et immersive.</p>


          <p>Mais qui se cache derrière ce projet ? Laissez-moi me présenter : Je suis <strong>Marie</strong>, experte dans l&apos;accompagnement des personnes ambitieuses et authentiques. Ma passion est de vous aider à réaliser vos aspirations les plus profondes, tout en préservant et cultivant votre authenticité.</p>

          
          <p>Ma formation et ma pratique en tant que praticienne Cleen et PNL me permettent de vous offrir des techniques et des stratégies éprouvées pour dénouer les obstacles inconscients, clarifier vos désirs et catalyser vos actions vers le succès.</p>

          <p>Alors, même si mon site est en chantier, sachez que ma mission reste inchangée : vous accompagner dans votre voyage vers une version plus accomplie et authentique de vous-même.</p>

          
          <p>
              Une multitude de ressources, d&apos;articles et de conseils vous attendent. 
          </p>

          <p>En attendant, n&apos;hésitez pas à me contacter sur l&apos;un de mes réseaux pour toute question ou pour débuter votre parcours d&apos;accompagnement.</p>
      </section>

			<div className="pt-12 pb-8">

			</div>

			<div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
        <a className="link" href="mailto:mlcoachandcleen@gmail.com" data-tippy-content="@email_handle">mlcoachandcleen@gmail.com</a>
        <a className="link" href="https://www.linkedin.com/in/marie-mlcoachandcleen-397921240/" data-tippy-content="@linkdeen_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><title>LinkedIn</title><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg></a>
        
				<a className="link" href="https://instagram.com/mlcoachandcleen?igshid=MzRlODBiNWFlZA==" data-tippy-content="@instagram_handle"><svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg></a>
    
	
			</div>
			
		
		</div>

	</div>
	

	<div className="w-full h-full lg:w-2/5">

  <Image
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              src="/marie.jpg" 
              alt="Home"
              width={750}
              height={750}
              priority
              />
	
		
	</div>
	

</div>

	
	
</div>

      
      
    </main>
  )
}
