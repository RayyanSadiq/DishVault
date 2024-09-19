import { BookX } from 'lucide-react'
import RecipeCard from '../components/RecipeCard'
import { getRandomColor } from '../lib/utills';

const FavoritesPages = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className="bg-[#f8f7fa] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">


        {favorites.length === 0 && (
          <div className="h-[80vh] flex flex-col items-center justify-center gap-4">
            <BookX size={64} className='m-12' />
            <p className="text-lg font-semibold">No favorites yet</p>
            <p className="text-sm text-slate-500 text-center">You can add your favorite recipes by clicking the heart icon on recpies.</p>
          </div>
        )}


        {favorites.length !== 0 && (
          <div>
            <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {favorites.map((recipe, i) => (
                <RecipeCard key={i} recipe={recipe} {...getRandomColor()} />
              ))}
            </div>
          </div>
        )}






      </div>
    </div>
  )
}

export default FavoritesPages