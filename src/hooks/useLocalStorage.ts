import { useEffect, useState } from "react";

function getSavedDataForm(key: string, initialValue: any) {
  const savedData = JSON.parse(localStorage.getItem(key) as any);

  if (savedData){
    return savedData;
  } else {
    return initialValue;
  }
}

export function useLocalStorage(key: string, initialValue: any) {
  const [dataForm, setDataForm] = useState(() => {
    return getSavedDataForm(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(dataForm));
  }, [dataForm]);

  return [dataForm, setDataForm];
}