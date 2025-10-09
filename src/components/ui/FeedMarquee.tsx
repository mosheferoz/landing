"use client";

import React, { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { useInView } from "@/hooks/use-in-view";
import { useMounted } from "@/hooks/use-mounted";

type Post = {
  id: string;
  image: string;
  user: string;
  likes: string;
  text: string;
  hashtags: string;
};

const postsLeft: Post[] = [
  // Local media from /public/media
  { id: 'l-new-tshirt', image: '/media/tshirt-wolf-he.png', user: 'your_brand', likes: '1,430', text: 'פיי, איזו חולצה!', hashtags: '#אופנה #חולצה' },
  { id: 'l-new-trash', image: '/media/trash-dont-insult-he.png', user: 'your_brand', likes: '1,122', text: 'אל תעליבו אותו!', hashtags: '#בית #ניקיון' },
  { id: 'l-local2', image: '/media/Pink and Blue Simple 2.2 Sale Instagram Story.png', user: 'your_brand', likes: '987', text: 'Special sale is now live!', hashtags: '#sale #today' },
  { id: 'l1', image: '/media/A1.png', user: 'your_brand', likes: '1,204', text: 'Fresh drop from today’s shoot ✨', hashtags: '#brand #new' },
  { id: 'l2', image: 'https://images.unsplash.com/photo-1514516870926-2059896aa8d6?q=80&w=1200&auto=format&fit=crop', user: 'mezze_time', likes: '2,401', text: 'Mediterranean platter loaded with colors and flavors.', hashtags: '#mezze #homecooking #healthyfood' },
  { id: 'l3', image: 'https://images.unsplash.com/photo-1625944525921-a5ff72b316f0?q=80&w=1200&auto=format&fit=crop', user: 'chef_daily', likes: '3,112', text: 'A colorful lunch bowl to power your afternoon.', hashtags: '#fresh #bowls #foodie' },
  { id: 'l4', image: '/media/Beige Yellow Minimalist Hotel Promotion Instagram Story.jpg', user: 'your_brand', likes: '1,102', text: 'Hotel promo story.', hashtags: '#promo #hotel' },
  { id: 'l5', image: '/media/Brown Scrapbook India Travel Promo Instagram Story (1).jpg', user: 'your_brand', likes: '1,208', text: 'Travel promo story.', hashtags: '#travel #promo' },
  { id: 'l6', image: '/media/הוסף כותרת (1).jpg', user: 'your_brand', likes: '1,045', text: 'תמונה חדשה מהגלריה.', hashtags: '#תוכן #חברה' },
  { id: 'l7', image: "/media/ChatGPT Image Sep 9, 2025, 08ג'שג'שג'שג'שג_58_31 PM.png", user: 'your_brand', likes: '1,309', text: 'Generated with AI.', hashtags: '#AI #design' },
];

const postsCenter: Post[] = [
  // Ensure this appears first for focus
  { id: 'c-local-sale', image: '/media/Pink and Blue Simple 2.2 Sale Instagram Story.png', user: 'your_brand', likes: '987', text: 'Special sale is now live!', hashtags: '#sale #today' },
  { id: 'c-new-tshirt', image: '/media/tshirt-wolf-he.png', user: 'your_brand', likes: '1,430', text: 'פיי, איזו חולצה!', hashtags: '#אופנה #חולצה' },
  { id: 'c-new-trash', image: '/media/trash-dont-insult-he.png', user: 'your_brand', likes: '1,122', text: 'אל תעליבו אותו!', hashtags: '#בית #ניקיון' },
  { id: 'c-local-a1', image: '/media/A1.png', user: 'your_brand', likes: '1,204', text: 'Design sample A1.', hashtags: '#brand #design' },
  { id: 'c-local-hotel', image: '/media/Beige Yellow Minimalist Hotel Promotion Instagram Story.jpg', user: 'your_brand', likes: '1,221', text: 'Hotel promo story.', hashtags: '#promo #hotel' },
  { id: 'c-local-travel', image: '/media/Brown Scrapbook India Travel Promo Instagram Story (1).jpg', user: 'your_brand', likes: '1,176', text: 'Travel promo story.', hashtags: '#travel #promo' },
  { id: 'c-local-video', image: '/media/Brown White Minimalist Elegant Coffee Time Mobil Video.mp4', user: 'your_brand', likes: '2,113', text: 'Coffee time ☕️', hashtags: '#coffee #reel' },
  { id: 'c-local-ai', image: "/media/ChatGPT Image Sep 9, 2025, 08ג'שג'שג'שג'שג_58_31 PM.png", user: 'your_brand', likes: '1,309', text: 'Generated with AI.', hashtags: '#AI #design' },
  { id: 'c-local-he', image: '/media/הוסף כותרת (1).jpg', user: 'your_brand', likes: '1,045', text: 'תמונה חדשה מהגלריה.', hashtags: '#תוכן #חברה' },
];

const postsRight: Post[] = [
  { id: 'r-new-tshirt', image: '/media/tshirt-wolf-he.png', user: 'your_brand', likes: '1,430', text: 'פיי, איזו חולצה!', hashtags: '#אופנה #חולצה' },
  { id: 'r-new-trash', image: '/media/trash-dont-insult-he.png', user: 'your_brand', likes: '1,122', text: 'אל תעליבו אותו!', hashtags: '#בית #ניקיון' },
  { id: 'r1', image: 'https://images.unsplash.com/photo-1573003311090-b40e8171a444?q=80&w=1200&auto=format&fit=crop', user: 'aquasource', likes: '2,522', text: 'Nature’s finest, bottled with care. Premium bottles that elevate your routine.', hashtags: '#aquasource #hydration #springwater' },
  // Move A1 later to appear after other posts
  { id: 'r2-replaced', image: '/media/Beige Yellow Minimalist Hotel Promotion Instagram Story.jpg', user: 'your_brand', likes: '1,221', text: 'Hotel promo story.', hashtags: '#promo #hotel' },
  { id: 'r3', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop', user: 'colorbottles', likes: '2,118', text: 'Hydration meets color. Which one is your pick?', hashtags: '#water #bottles #lifestyle' },
  { id: 'r-local1', image: '/media/הוסף כותרת (1).jpg', user: 'your_brand', likes: '1,067', text: 'מבט מקרוב.', hashtags: '#תוכן #מותג' },
  { id: 'r-local2', image: "/media/ChatGPT Image Sep 9, 2025, 08ג'שג'שג'שג'שג_58_31 PM.png", user: 'your_brand', likes: '1,188', text: 'Another AI render.', hashtags: '#ai #render' },
  { id: 'r2-a1', image: '/media/A1.png', user: 'greenjuice', likes: '1,904', text: 'Fresh morning blends to kickstart the day.', hashtags: '#healthy #juice #wellness' },
];

function DotsIcon(){
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <circle cx="5" cy="12" r="1.8" fill="currentColor"/>
      <circle cx="12" cy="12" r="1.8" fill="currentColor"/>
      <circle cx="19" cy="12" r="1.8" fill="currentColor"/>
    </svg>
  );
}

function HeartIcon({ filled }: { filled?: boolean }){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      {filled ? (
        <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      ) : (
        <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.41 3.81 8.74 3 7 3A5.5 5.5 0 0 0 1.5 8.5c0 3.57 3.4 6.64 8.55 11.54L11.5 21.3l1.45-1.32C18.1 15.14 21.5 12.07 21.5 8.5 21.5 5.42 19.08 3 16.5 3z"/>
      )}
    </svg>
  );
}

function CommentIcon(){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 5V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>
    </svg>
  );
}

function SendIcon(){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2 11 13"/>
      <path d="M22 2 15 22 11 13 2 9 22 2Z"/>
    </svg>
  );
}

function SaveIcon(){
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 21 12 16 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"/>
    </svg>
  );
}

function PostCard({ post }: { post: Post }) {
  const [isVisible, setIsVisible] = useState(true);
  const [liked, setLiked] = useState(false);
  const baseLikes = (() => {
    const n = parseInt((post.likes || '').toString().replace(/,/g, ''), 10);
    return Number.isFinite(n) ? n : 0;
  })();
  const displayLikes = (liked ? baseLikes + 1 : baseLikes).toLocaleString('en-US');
  if (!isVisible) return null;
  return (
    <article className="ig-card">
      <header className="ig-header">
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <span className="ig-avatar" />
          <div className="ig-header-main">
            <span className="ig-user">{post.user}</span>
            {(/ai/i.test(post.text) || /#ai/i.test(post.hashtags)) && (
              <span className="ig-badge">Made with AI</span>
            )}
          </div>
        </div>
        <button className="ig-menu" aria-label="More options" type="button">
          <DotsIcon />
        </button>
      </header>
      <div className="ig-media" onDoubleClick={() => setLiked(true)}>
        {(() => {
          const src = /^https?:/i.test(post.image) ? post.image : encodeURI(post.image);
          const isVideo = /\.(mp4|webm|ogg)$/i.test(src);
          return isVideo ? (
            <video className="ig-media-el" src={src} muted loop playsInline autoPlay preload="metadata" onError={() => setIsVisible(false)} />
          ) : (
            <img className="ig-media-el" src={src} alt="post" loading="lazy" onError={() => setIsVisible(false)} />
          );
        })()}
      </div>
      <div className="ig-actions">
        <div className="ig-actions-left">
          <button className={`ig-action-btn like${liked ? ' active' : ''}`} aria-label="Like" aria-pressed={liked} type="button" onClick={() => setLiked(v => !v)}>
            <HeartIcon filled={liked} />
          </button>
          <button className="ig-action-btn" aria-label="Comment" type="button"><CommentIcon/></button>
          <button className="ig-action-btn" aria-label="Share" type="button"><SendIcon/></button>
        </div>
        <button className="ig-action-btn ig-save" aria-label="Save" type="button"><SaveIcon/></button>
      </div>
      <div className="ig-meta">
        <div className="ig-likes">{displayLikes} likes</div>
        <p className="ig-caption"><span className="ig-user-handle">{post.user}</span> {post.text}</p>
        <div className="ig-tags">{post.hashtags}</div>
      </div>
    </article>
  );
}

function Column({ posts, direction = 'up', speed = 32, initialOffset = 0 }: { posts: Post[]; direction?: 'up' | 'down'; speed?: number; initialOffset?: number }) {
  const mediaPosts = posts.filter((p) => typeof p.image === 'string' && p.image.trim() !== '');
  const items = [...mediaPosts, ...mediaPosts];
  const innerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const posRef = useRef<number>(initialOffset);
  const halfHeightRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Performance optimizations
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref: columnRef, isInView } = useInView<HTMLDivElement>({ threshold: 0.1, triggerOnce: false });
  const isMounted = useMounted(150);

  // Detect mobile for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reduce speed on mobile for smoother performance
  const effectiveSpeed = prefersReducedMotion ? 0 : (isMobile ? speed * 0.65 : speed);
  const shouldAnimate = isMounted && isInView && !prefersReducedMotion;

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    // Don't animate if conditions not met
    if (!shouldAnimate || effectiveSpeed === 0) {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      // Reset position if reduced motion
      if (prefersReducedMotion && inner) {
        inner.style.transform = 'translate3d(0, 0, 0)';
      }
      return;
    }

    const measure = () => {
      // Half height because we render content twice for seamless loop
      halfHeightRef.current = inner.scrollHeight / 2;
    };
    measure();

    const ro = new ResizeObserver((_entries) => measure());
    ro.observe(inner);

    const step = (t: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = t;
      const dt = (t - lastTimeRef.current) / 1000;
      lastTimeRef.current = t;

      if (!pausedRef.current && halfHeightRef.current > 0) {
        const dir = direction === 'up' ? -1 : 1;
        let pos = posRef.current + dir * effectiveSpeed * dt;
        const half = halfHeightRef.current;
        if (dir === -1 && pos <= -half) pos += half;
        if (dir === 1 && pos >= 0) pos -= half;
        posRef.current = pos;
        inner.style.transform = `translate3d(0, ${pos.toFixed(2)}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [direction, effectiveSpeed, shouldAnimate, prefersReducedMotion]);

  return (
    <div 
      className="feed-col" 
      ref={(node) => {
        if (node) {
          (columnRef as any).current = node;
        }
      }}
      onMouseEnter={() => (pausedRef.current = true)} 
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div className="marquee-viewport">
        <div className="marquee-inner" ref={innerRef} style={{ animation: 'none' as any }}>
          {items.map((p, idx) => (
            <PostCard key={`${p.id}-${idx}`} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeedMarquee() {
  return (
    <section className="feed-section">
      <div className="feed-grid">
        <Column posts={postsLeft} direction="up" speed={32} initialOffset={-320} />
        <Column posts={postsCenter} direction="down" speed={28.8} initialOffset={-80} />
        <Column posts={postsRight} direction="up" speed={30} initialOffset={-200} />
      </div>
    </section>
  );
}

