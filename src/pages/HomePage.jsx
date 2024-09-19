import { Search  } from 'lucide-react'
import RecipeCard from '../components/RecipeCard'

const HomePage = () => {
  return (
    <div className="bg-[#f8f7fa] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form className="input shadow-md flex items-center gap-2">
          <Search size={"24"} />
          <input type="text" className='text-sm md:text-md grow' placeholder='What recpies do you want to find?' />
        </form>

        <p className='font-bold text-3xl md:text-5xl mt-4 '>
          Recommended Recipies
        </p>
        <p className='text-slate-500 font-semibold ml-1 my-2 test-sm tracking-tight'>
          Popular Choices
        </p>

        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <RecipeCard/> 
          <RecipeCard/> 
          <RecipeCard/> 
          <RecipeCard/> 
          <RecipeCard/> 
        </div>

      </div>
    </div>
  )
}

export default HomePage