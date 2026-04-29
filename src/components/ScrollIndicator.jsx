import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 28,
    mass: 0.9,
  })

  const beamY = useTransform(smooth, [0, 1], ['-8%', '72%'])
  const beamOpacity = useTransform(smooth, [0, 0.2, 0.55, 1], [0.14, 0.24, 0.34, 0.2])
  const haloOpacity = useTransform(smooth, [0, 0.5, 1], [0.1, 0.18, 0.12])

  return (
    <div className="pointer-events-none fixed inset-y-0 right-0 z-30 hidden w-28 overflow-hidden xl:block">
      <motion.div className="cinema-light-beam absolute right-2 top-0 h-56 w-24" style={{ y: beamY, opacity: beamOpacity }} />
      <motion.div className="cinema-light-halo absolute right-[-1.5rem] top-[18%] h-[28rem] w-[10rem]" style={{ y: beamY, opacity: haloOpacity }} />
      <div className="cinema-light-edge absolute inset-y-0 right-0 w-px" />
    </div>
  )
}
