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

export default (() => Navigation) satisfies QuartzComponentConstructor