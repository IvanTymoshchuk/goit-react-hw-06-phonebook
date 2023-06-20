import { useState, useEffect } from 'react';

const useLocaleStorage = (key, defaultValue) => {
  // записуємо у локал сторедж те що користувач вписує , якщо нічого не має то буде значення по дефолту
  const [contact, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    // якщо користувач щось вписував то ми відображаємо йому це з локал сторедж
    localStorage.setItem(key, JSON.stringify(contact));
  }, [key, contact]);
  return [contact, setState];
};

export default useLocaleStorage;
