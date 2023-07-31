function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className='container flex-1 mx-auto px-6 pt-16 text-center'>
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
           Welcome to
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase mb-8">
          My club
        </h1>

        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 
        bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          62,882 members
        </div>

        <form 
        action="mailto:adeyemolekan433@gmail.com" 
        target="_blank">

          <div className="mb-6">
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 
        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
        dark:focus:border-blue-500 grid-cols-3 placeholder:italic focus:bg-opacity-20 duration-150" 
        placeholder="E.g. Natus05@heyy.com" required />
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-2 font-mono
                focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg md:text-2xl lg:text-3xl w-full sm:w-auto 
                px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                ">
                 Join today
            </button>
         </div> 

         <div className="opacity-75 italic">
          By subscribing, you agree to my <a href="." target="_blank" className="hover:opacity-80 duration-150">Terms of Service</a> and <a href="." target="_blank" className="hover:opacity-80 duration-150">Privacy Policy</a>
         </div>

        </form>
      </main>

      <footer className='container mx-auto p-6 flex flex-col md:flex-row items-center justify-between'>
        <p>Made with 🤍 by Natus05</p>
        <div className="flex -mx-6">
          <a href="." className="mx-3 hover:opacity-80 duration-150">About Me</a>|
          <a href="." className="mx-3 hover:opacity-80 duration-150">Privacy</a>|
          <a href="." className="mx-3 hover:opacity-80 duration-150">Contact</a>
        </div>
      </footer>  
    </div>
  );
}

export default App;
