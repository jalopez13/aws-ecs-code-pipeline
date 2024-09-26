import { Character } from '@/components/character';

const IndexPage = async () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <p className="text-2xl font-semibold">
        Generate Random Starwars Character
      </p>
      <Character />
    </div>
  );
};

export default IndexPage;
