'use client';

import { useAppStore } from '@/lib/store';
import { PRODUCTS, STORES, COLLECTIONS, t, bi, fmtEGP } from '@/lib/data';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Card } from '@/components/Card';
import { Placeholder } from '@/components/Placeholder';
import { Rating } from '@/components/Rating';
import { StoreAvatar } from '@/components/StoreAvatar';
import { useEffect } from 'react';

function ProductCard({ productId }: { productId: string }) {
  const p = PRODUCTS.find((x) => x.id === productId);
  const store = STORES[p?.store || 's1'];
  const { lang, favs, toggleFav } = useAppStore();

  if (!p) return null;

  const isFaved = favs.has(p.id);

  return (
    <div className="cursor-pointer">
      <div className="relative mb-3">
        <Placeholder
          label={p.imageLabel}
          color={p.color}
          className="h-48 rounded-base"
        />
        <button
          onClick={() => toggleFav(p.id)}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border-0 bg-paper/90 backdrop-blur"
          style={{
            color: isFaved ? '#C97A50' : '#2A2520',
          }}
        >
          <Icon name={isFaved ? 'heart_fill' : 'heart'} size={16} />
        </button>
      </div>
      <div className="text-xs font-mono uppercase tracking-widest text-muted">
        {bi(store.name, lang)}
      </div>
      <div className="display mt-2 text-base leading-tight">
        {bi(p.title, lang)}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-medium">{fmtEGP(p.price, lang)}</span>
        <Rating value={p.rating} count={p.reviews} size="sm" />
      </div>
    </div>
  );
}

export default function Home() {
  const {
    lang,
    toggleLang,
    theme,
    toggleTheme,
  } = useAppStore();

  useEffect(() => {
    const htmlEl = document.documentElement;
    htmlEl.lang = lang;
    htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dataset.theme = theme;
  }, [lang, theme]);

  return (
    <div
      className="min-h-screen bg-paper paper-bg"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <header className="border-b border-line bg-paper px-8 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-muted">
              {lang === 'ar' ? 'نموذج أولي' : 'Interactive Prototype'}
            </div>
            <div className="display mt-2 flex items-center gap-3 text-4xl">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-lg"
                style={{ background: '#1F4A47' }}
              >
                <span style={{ color: '#C9A24A', fontSize: '20px' }}>◗</span>
              </div>
              <span>{t(lang, 'appName')}</span>
            </div>
            <div className="mt-2 text-sm text-ink-light">
              {lang === 'ar'
                ? 'سوق ثنائية اللغة للحرف المصنوعة يدويًا'
                : 'Bilingual marketplace for Egyptian handmade crafts'}
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLang}
              className="font-mono"
            >
              <Icon name="globe" size={14} />
              {lang === 'ar' ? 'English' : 'العربية'}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="font-mono"
            >
              {theme === 'light' ? '🌙' : '☀️'}
              {theme === 'light'
                ? lang === 'ar'
                  ? 'مظلم'
                  : 'Dark'
                : lang === 'ar'
                  ? 'فاتح'
                  : 'Light'}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-line bg-paper px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div>
              <h1 className="display text-5xl leading-tight">
                {lang === 'ar'
                  ? 'متحف الحرف المصرية'
                  : 'Egyptian Crafts Marketplace'}
              </h1>
              <p className="mt-4 text-lg text-ink-light">
                {lang === 'ar'
                  ? 'اكتشف المنتجات المصنوعة يدويًا من أفضل الحرفيين في مصر'
                  : 'Discover authentic handmade products from Egyptian artisans'}
              </p>
              <div className="mt-6 flex gap-3">
                <Button>
                  <Icon name="shop" size={16} />
                  {t(lang, 'shop')}
                </Button>
                <Button variant="ghost">
                  {lang === 'ar' ? 'تصفح المتاجر' : 'Browse makers'}
                </Button>
              </div>
            </div>
            <Placeholder
              label="hero image"
              color="clay"
              className="min-h-80 rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-paper px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="display text-3xl font-normal">
              {lang === 'ar'
                ? 'المنتجات المقترحة'
                : 'Featured Products'}
            </h2>
            <p className="mt-2 text-sm font-mono uppercase tracking-widest text-muted">
              {lang === 'ar' ? 'مختارة بعناية لك' : 'Curated for you'}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.slice(0, 4).map((p) => (
              <ProductCard key={p.id} productId={p.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="border-t border-line bg-sand px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="display text-3xl font-normal">
              {lang === 'ar' ? 'المجموعات' : 'Collections'}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {COLLECTIONS.map((c) => (
              <div key={c.id}>
                <Placeholder
                  label={c.en.toLowerCase()}
                  color={c.color}
                  className="mb-4 h-40 rounded-lg"
                />
                <h3 className="display text-lg font-normal">
                  {lang === 'ar' ? c.ar : c.en}
                </h3>
                <p className="mt-2 text-sm text-muted">{bi(c.sub, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Makers */}
      <section className="bg-paper px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="display mb-8 text-3xl font-normal">
            {lang === 'ar' ? 'الحرفيون' : 'Featured Makers'}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(STORES)
              .slice(0, 4)
              .map(([id, store]) => (
                <Card key={id} className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <StoreAvatar store={store} color={store.color} size={48} />
                    <div className="flex-1 min-w-0">
                      <h3 className="display text-base font-normal leading-tight">
                        {bi(store.name, lang)}
                      </h3>
                      <p className="mt-1 text-xs text-muted">
                        {store.followers.toLocaleString()} followers
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-ink-light">
                    {bi(store.location, lang)}
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    className="mt-4 w-full"
                  >
                    {lang === 'ar' ? 'تابع' : 'Follow'}
                  </Button>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line bg-sand px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-12 md:grid-cols-4">
            <div>
              <h3 className="display font-normal text-ink">
                {t(lang, 'appName')}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {lang === 'ar'
                  ? 'منصة لدعم الحرف اليدوية المصرية'
                  : 'Supporting Egyptian handmade crafts'}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink-light">
                {lang === 'ar' ? 'التسوق' : 'Shop'}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted hover:text-ink">
                    {lang === 'ar' ? 'كل المنتجات' : 'All products'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-ink">
                    {lang === 'ar' ? 'الفئات' : 'Categories'}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink-light">
                {lang === 'ar' ? 'حول' : 'About'}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted hover:text-ink">
                    {lang === 'ar' ? 'عن بازار' : 'About Bazzar'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-ink">
                    {lang === 'ar' ? 'الشروط' : 'Terms'}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink-light">
                {lang === 'ar' ? 'التواصل' : 'Contact'}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted hover:text-ink">
                    {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-ink">
                    {lang === 'ar' ? 'وسائل التواصل' : 'Social'}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-line pt-8 text-center text-sm text-muted">
            <p>
              {lang === 'ar'
                ? '© ٢٠٢٤ بازار — منصة الحرف المصرية'
                : '© 2024 Bazzar — Egyptian Crafts Platform'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
