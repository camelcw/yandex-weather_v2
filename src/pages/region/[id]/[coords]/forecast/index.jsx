import React from "react";
import { useRouter } from 'next/router'

const handler = () => {
    const router = useRouter()
    console.log(router.query)

    return (
      <div>
        прогноз на 10 дней
      </div>
    );
  };
  
  export default handler;