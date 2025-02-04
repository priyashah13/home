import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Navigation: QuartzComponent = ({}: QuartzComponentProps) => {
    return (
      <div class="navigation">
        <a href="/about" class="nav-link">About</a>
        <a href="/projects" class="nav-link">Projects</a>
        <a href="/speaking" class="nav-link">Speaking</a>
      </div>
    )
}

Navigation.css = `
.navigation {
  margin: 0;

  a.nav-link {
    margin-left: 0.7rem;
  }
}
`

export default (() => Navigation) satisfies QuartzComponentConstructor