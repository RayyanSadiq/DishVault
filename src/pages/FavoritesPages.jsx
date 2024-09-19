import { BookX } from 'lucide-react'
import RecipeCard from '../components/RecipeCard'

const FavoritesPages = () => {
  const fav = false;

  return (
    <div className="bg-[#f8f7fa] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">


        {!fav && (
          <div className="h-[80vh] flex flex-col items-center justify-center gap-4">
            <BookX size={64} className='m-12' />
            <p className="text-lg font-semibold">No favorites yet</p>
            <p className="text-sm text-slate-500 text-center">You can add your favorite recipes by clicking the heart icon on recpies.</p>
          </div>
        )}

        {fav && (
          <div>
            <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
            </div>
          </div>

        )}


      </div>
    </div>
  )
}

export default FavoritesPages