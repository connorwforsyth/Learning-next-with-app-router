import { Inter, Lusitana } from 'next/font/google';


export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });



import localFont from 'next/font/local';
export const designitAlphabeta = localFont({ 
  
  src: [
    {
      path:'../localFontFile/designit-alphabeta/DesignitAlphabeta-Regular.ttf',
      style: 'regular',
    }
]
});

/*  src: [
    {
      path: '/DesignitAlphabeta-Regular.ttf',
      weight: 400,
      style: 'regular',
    },
  ]
});*/ 