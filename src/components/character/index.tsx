'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { ImSpinner11 } from 'react-icons/im';
import { getCharacter } from '@/actions/get-character';
import { Button } from '@/components/ui/button';

export const Character = () => {
  const [character, setCharacter] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCharacter = useCallback(async () => {
    setLoading(true);
    const newCharacter = await getCharacter();
    setCharacter(newCharacter);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  return (
    <section className="py-4 text-center space-y-8 w-full max-w-sm flex flex-col items-center justify-center">
      {character ? (
        <h1 className="text-4xl font-bold text-center">{character}</h1>
      ) : (
        <ImSpinner11 className="mr-2 h-8 w-8 animate-spin" />
      )}
      <Button
        size={'lg'}
        onClick={() => fetchCharacter()}
        disabled={loading}
      >
        Generate
      </Button>
    </section>
  );
};
