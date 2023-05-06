import { motion } from "framer-motion"
import Ketogenic from "../components/Ketogenic"
import Popular from "../components/Popular"


function Home() {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 1.2}}
    >
      <Ketogenic />
      <Popular />
    </motion.div>
  )
}

export default Home
