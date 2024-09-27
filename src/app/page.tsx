import { Character } from '@/components/character';

const IndexPage = async () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="text-4xl font-semibold">Starwars Character</h1>
      <p className="text-lg text-gray-600">
        Generate a random Starwars character, ... why? Why not!
      </p>
      <Character />
    </div>
  );
};

export default IndexPage;
