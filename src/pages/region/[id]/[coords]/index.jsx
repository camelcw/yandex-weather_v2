import React from "react";
import { useRouter } from 'next/router'

export default function handler() {
  const {query} = useRouter()

  
  return (
    <div>
      координаты {query.coords}
    </div>
  );
}