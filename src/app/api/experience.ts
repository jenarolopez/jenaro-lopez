import experience from '@/api/json/experience.json';

export const getExperience = async () => {
  // Simulating an API call with a small delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return experience;
}; 