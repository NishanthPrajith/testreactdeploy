import MoveFrom from "../loading/pageLoading/pageChange";
import { motion } from "framer-motion";

export default function Home() {

    const animation = {
        "initial" : {
            opacity: 0,
        },
        "final" : {
            opacity: 1,
            transition: {
                ease: "easeInOut",
                default: { delay: 4, duration: 1 },
            },
        },
    }

    return (
        <div>
            <motion.div variants = {animation} initial = "initial" animate = "final">
                <h1>Home Page</h1>
            </motion.div>
        </div>
    )
}