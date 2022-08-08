import { useEffect, useState } from "react";

function getSavedDataForm(key: any, initialValue: any) {
  const savedData = JSON.parse(localStorage.getItem(key) as string);

  if (savedData){
    return savedData;
  } else {
    return initialValue;
  }
}

export function useLocalStorage(key: any, initialValue: any) {
  const [dataForm, setDataForm] = useState(() => {
    return getSavedDataForm(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(dataForm));
  }, [dataForm, key])

  return [dataForm, setDataForm];
}