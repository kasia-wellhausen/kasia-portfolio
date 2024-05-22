import styles from './ProjectsStyles.module.css';
import todo_list from '../../assets/todo_list.png';
import password_checker from '../../assets/password_checker.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={todo_list}
          link="https://github.com/kasia-wellhausen/todo-list.git"
          h3="To-do list"
          p="Keep track of your tasks"
        />
        <ProjectCard
          src={password_checker}
          link="https://github.com/kasia-wellhausen/password_checker.git"
          h3="Password Checker"
          p="Check password's strength"
        />
      </div>
    </section>
  );
}

export default Projects;
