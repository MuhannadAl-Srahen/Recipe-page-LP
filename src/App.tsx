import omelette from './assets/omelette.jpeg'
import Container from './components/Container'

export default function App() {
  return (
    <Container>
      <img src={omelette} alt='omelette' className='md:rounded-xl' />

      <div className='md:0 flex flex-col gap-6 p-6'>
        <div>
          <h2 className='font-young-serif my-3 text-[46px] font-bold'>
            Simple Omelette Recipe
          </h2>
          <p className='text-stone-600'>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats
          </p>
        </div>

        <div className='rounded-2xl bg-[#FFF7FC] p-7'>
          <h4 className='mb-1.5 text-xl font-bold text-rose-800'>
            Preparation time
          </h4>
          <ul className='flex list-disc flex-col gap-2 pl-8 font-extralight text-stone-600'>
            <li className='pl-4'>
              <span className='font-bold'>Total:</span> Approximately 10 minutes
            </li>
            <li className='pl-4'>
              <span className='font-bold'>Preparation:</span> 5 minutes
            </li>
            <li className='pl-4'>
              <span className='font-bold'>Cooking:</span> 5 minutes
            </li>
          </ul>
        </div>

        <div className='border-b border-gray-400 pb-8'>
          <h1 className='font-young-serif mb-6 text-4xl font-bold text-amber-800'>
            Ingredients
          </h1>

          <ul className='flex list-disc flex-col gap-2 pl-8 text-stone-600'>
            <li className='pl-4'>2-3 large eggs</li>
            <li className='pl-4'>Salt, to taste</li>
            <li className='pl-4'>Pepper, to taste</li>
            <li className='pl-4'>1 tablespoon of butter or oil</li>
            <li className='pl-4'>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        <div className='border-b border-gray-400 pb-8'>
          <h1 className='font-young-serif mb-6 text-4xl font-bold text-amber-800'>
            Instructions
          </h1>

          <ul className='flex list-decimal flex-col gap-2 pl-8 text-stone-600'>
            <li className='pl-4'>
              <span className='font-bold'>Beat the eggs:</span> In a bowl, beat
              the eggs with a pinch of salt and pepper until they are well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture.
            </li>

            <li className='pl-4'>
              <span className='font-bold'>Heat the pan:</span> Place a non-stick
              frying pan over medium heat and add butter or oil.
            </li>

            <li className='pl-4'>
              <span className='font-bold'>Cook the omelette:</span> Once the
              butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure the eggs evenly coat the surface.
            </li>

            <li className='pl-4'>
              <span className='font-bold'>Add fillings (optional):</span>
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>

            <li className='pl-4'>
              <span className='font-bold'>Fold and serve:</span> As the omelette
              continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a
              plate.
            </li>

            <li className='pl-4'>
              <span className='font-bold'>Enjoy:</span> Serve hot, with
              additional salt and pepper if needed.
            </li>
          </ul>
        </div>

        <div>
          <h1 className='font-young-serif mb-6 text-4xl font-bold text-amber-800'>
            Nutrition
          </h1>

          <p className='mb-3 text-stone-600'>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className='w-full table-auto border-separate border-spacing-y-3 text-stone-600'>
            <tbody>
              <tr>
                <td className='border-b border-gray-400 pb-3 pl-6'>Calories</td>
                <td className='border-b border-gray-400 pb-3 font-extrabold text-amber-800'>
                  277kcal
                </td>
              </tr>
              <tr>
                <td className='border-b border-gray-400 pb-3 pl-6'>Carbs</td>
                <td className='border-b border-gray-400 pb-3 font-extrabold text-amber-800'>
                  0g
                </td>
              </tr>
              <tr>
                <td className='border-b border-gray-400 pb-3 pl-6'>Protein</td>
                <td className='border-b border-gray-400 pb-3 text-left font-extrabold text-amber-800'>
                  20g
                </td>
              </tr>
              <tr>
                <td className='pl-6'>Fat</td>
                <td className='font-extrabold text-amber-800'>22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  )
}
