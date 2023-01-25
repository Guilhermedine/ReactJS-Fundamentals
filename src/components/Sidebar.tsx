import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/Guilhermedine.png" />

        <strong>Guilherme Dine</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}