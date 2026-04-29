import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 32,
  scale = 0.985,
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y, scale }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0.45 : 1.05, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
