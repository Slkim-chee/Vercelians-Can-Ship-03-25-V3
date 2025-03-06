import { User, MapPin, Coffee, GlobeIcon as GolfBall, ShoppingBasketIcon as Basketball, Cat } from "lucide-react"

function MyV0Components() {
  return (
    <div>
      {/* About Me Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-2xl mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <User className="h-5 w-5" /> About Me
        </h2>

        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            Hello! I'm a proud cat parent to two wonderful felines, Elton and Scarlett, who keep me entertained with
            their playful antics and cuddles.
          </p>

          <div className="flex items-center gap-2">
            <Cat className="h-4 w-4 text-amber-500" />
            <span>Cat dad to Elton and Scarlett</span>
          </div>

          <div className="flex items-center gap-2">
            <Basketball className="h-4 w-4 text-orange-500" />
            <span>Avid basketball fan and loyal Golden State Warriors supporter</span>
          </div>

          <div className="flex items-center gap-2">
            <GolfBall className="h-4 w-4 text-green-500" />
            <span>Golf enthusiast looking to improve my game and play more often</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-red-500" />
            <span>Based in Petaluma, CA, where I enjoy hiking the beautiful local trails</span>
          </div>

          <div className="flex items-center gap-2">
            <Coffee className="h-4 w-4 text-brown-500" />
            <span>Food explorer always on the hunt for new restaurants and culinary experiences</span>
          </div>

          <p>
            When I'm not cheering for the Warriors or planning my next golf outing, you can find me exploring hiking
            trails around Petaluma or trying out the latest restaurant recommendations from locals.
          </p>
        </div>
      </div>

      {/* Any other components you have in your MyV0Components file */}
    </div>
  )
}

export default MyV0Components
