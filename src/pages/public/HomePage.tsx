import { ArrowRight, ShieldCheck, Sparkles, Truck } from 'lucide-react';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { ProductCard } from '@/components/common/ProductCard';

import { Badge } from '@/components/ui/Badge';

import { Button } from '@/components/ui/Button';

import { Card } from '@/components/ui/Card';

import { useListProductsQuery } from '@/features/products/productsApi';

import { fallbackProducts } from '@/data/mockData';

export default function HomePage() {
  const { data } = useListProductsQuery({ limit: 6 });
  const products = data?.data?.length ? data.data : fallbackProducts;
  return (
    <>
      <section className="container-page grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <Badge>Production-ready e-commerce frontend</Badge>
          <div className="space-y-5">
            <h1 className="text-5xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Modern commerce, engineered for real teams.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              NexCart demonstrates clean React architecture, role-based dashboards, secure auth, RTK
              Query caching, and responsive SaaS-grade UI.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 font-semibold text-white"
            >
              Shop products <ArrowRight className="size-5" />
            </Link>
            <Link
              to="/register"
              className="focus-ring inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 px-6 font-semibold dark:border-slate-700"
            >
              Create seller account
            </Link>
          </div>
        </motion.div>
        <Card className="relative overflow-hidden bg-slate-950 p-4 text-white">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
            alt="Commerce dashboard"
            className="aspect-[4/3] rounded-2xl object-cover opacity-80"
          />
          <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 p-5 text-slate-950 shadow-xl backdrop-blur">
            <p className="text-sm font-semibold text-indigo-600">Live metrics</p>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center">
              <div>
                <strong className="block text-2xl">24K</strong>
                <span className="text-xs text-slate-500">Orders</span>
              </div>
              <div>
                <strong className="block text-2xl">98%</strong>
                <span className="text-xs text-slate-500">Uptime</span>
              </div>
              <div>
                <strong className="block text-2xl">4.8</strong>
                <span className="text-xs text-slate-500">Rating</span>
              </div>
            </div>
          </div>
        </Card>
      </section>
      <section className="container-page grid gap-4 pb-16 md:grid-cols-3">
        {[
          {
            icon: ShieldCheck,
            title: 'Secure auth',
            text: 'JWT access tokens with refresh-token rotation.',
          },
          {
            icon: Truck,
            title: 'Real commerce flows',
            text: 'Cart, checkout, orders, inventory, and analytics.',
          },
          {
            icon: Sparkles,
            title: 'Interview-ready UI',
            text: 'Reusable components, animations, and responsive layouts.',
          },
        ].map((item) => (
          <Card key={item.title}>
            <item.icon className="mb-4 size-8 text-indigo-600" />
            <h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.text}</p>
          </Card>
        ))}
      </section>
      <section className="container-page pb-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">
              Featured catalog
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950 dark:text-white">
              Products from the API
            </h2>
          </div>
          <Button variant="outline">
            <Link to="/products">View all</Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
