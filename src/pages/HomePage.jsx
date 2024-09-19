import { Search } from 'lucide-react'
import RecipeCard from '../components/RecipeCard'
import { useEffect, useState } from 'react'
import { getRandomColor } from '../lib/utills'

// store these on server after watching github clone app
const APP_ID = import.meta.env.VITE_APP_ID
const APP_KEY = import.meta.env.VITE_APP_KEY

const HomePage = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchRecipes = async (query) => {
    setLoading(true)
    setRecipes([])
    try {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${query}&type=public`)
      const data = await res.json()
      setRecipes(data.hits)
      console.log(data)
    } catch (error) {
      console.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecipes("chicken") // defalut search
  }, [])

  const handleSearchRecipe = (e) => {
    e.preventDefault()
    const query = e.target[0].value
    fetchRecipes(query)
  }

  return (
    <div className="bg-[#f8f7fa] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form className="input shadow-md flex items-center gap-2" onSubmit={handleSearchRecipe}>
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

          {!loading && recipes.map(({recipe}, i) => (
            <RecipeCard key={i} recipe={recipe} {...getRandomColor()} />
          ))}

          {loading && [...Array(9)].map((_, i) => (
            <div key={i} className="flex flex-col gap-4 w-full">
                <div className='skeleton h-32 w-full'></div>
                <div className='flex justify-between'>
                  <div className='skeleton h-6 w-28'></div>
                  <div className='skeleton h-4 w-24'></div>
                </div>
                <div className='skeleton h-4 w-1/2'></div>
            </div>

          ))}



        </div>

      </div>
    </div>
  )
}

export default HomePage