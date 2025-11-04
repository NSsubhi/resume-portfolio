# Implementation Examples

Here are concrete code examples you can use:

## Option 1: Magnetic Cards (Easiest & Most Interactive)

### Component Structure:
```tsx
// MagneticCard.tsx
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const MagneticCard = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    cardRef.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) rotateX(${-y * 0.05}deg) rotateY(${x * 0.05}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'translate(0, 0) rotateX(0) rotateY(0)';
  };
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        transition: 'transform 0.3s ease-out',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
};
```

### Usage:
```tsx
<MagneticCard className="p-8 bg-purple-900/30 rounded-3xl border border-purple-500/30 backdrop-blur-md">
  <h3 className="text-3xl font-bold mb-2">Software Engineer</h3>
  <p className="text-gray-300">Description...</p>
</MagneticCard>
```

---

## Option 2: Scroll Reveal Cards (Simple & Effective)

```tsx
// ScrollRevealCard.tsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const ScrollRevealCard = ({ children, index = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

### Usage:
```tsx
{experiences.map((exp, idx) => (
  <ScrollRevealCard key={idx} index={idx} className="p-8 bg-purple-900/30 rounded-3xl">
    <h3>{exp.title}</h3>
    <p>{exp.description}</p>
  </ScrollRevealCard>
))}
```

---

## Option 3: Parallax Scroll Cards

```tsx
// ParallaxCard.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ParallaxCard = ({ children, className = '', speed = 0.5 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  
  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
```

---

## Option 4: Glare Hover Cards (You have this!)

Simply wrap your existing cards with GlareHover:

```tsx
<GlareHover
  glareColor="#ffffff"
  glareOpacity={0.2}
  glareAngle={-30}
  glareSize={300}
>
  <div className="p-8 bg-purple-900/30 rounded-3xl border border-purple-500/30">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</GlareHover>
```

---

## My Recommendation:

Start with **Scroll Reveal Cards (Option 2)** because:
- ✅ Simplest to implement
- ✅ Works reliably
- ✅ Looks polished
- ✅ No complex dependencies
- ✅ Works great with your existing design

Want me to implement one of these? I can replace the ScrollStack with any of these options!


