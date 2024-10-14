'use client';
import style from './page.module.css';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), {
  // force the component to be rendered client-side only
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-screen">
      <Scene />
    </main>
  );
}