'use client';
import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/products/create-products');
  return null;
}