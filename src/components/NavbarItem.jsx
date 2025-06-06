'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; /*pra acessar e manipular parâmetros de busca na URL */

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div>
      <Link
        className={`hover:text-amber-200 font-semibold ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-amber-200 rounded-lg'
            : ''
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}